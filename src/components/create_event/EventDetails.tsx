import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Select,
  Spacer,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import useCreateEventStore from "../../stores/useCreateEventStore";
import { storage } from "../../utils/initialize_app_if_necessary";
const responsiveStack: any = {
  base: "column",
  md: "row",
};
interface EventDetailsProps {}
export const EventDetails: React.FC<EventDetailsProps> = ({}) => {
  const store = useCreateEventStore((state) => state);
  const [file, setFile] = useState<any>(""); // progress
  const [percent, setPercent] = useState(0); // Handle file upload event and update state
  const [temp, setTemp] = useState(0);

  function handleChange(event) {
    setFile(event.target.files[0]);
    handleUpload(event.target.files[0]);
  }
  const handleUpload = (f: any) => {
    console.log("file: ", f);
    if (!f) {
      alert("Please upload an image first!");
      return;
    }
    const storageRef = ref(storage, `/files/${store.id}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, f as any);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        ); // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setTemp(Math.random());
          store.setPosterUrl(url);
          console.log(url);
        });
      }
    );
  };
  return (
    <Stack spacing={"5"}>
      <Stack mt={"10"}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          General Details
        </Text>
        <Text>
          This will be displayed on you
          <Text display={"inline"} fontWeight={"bold"}>
            {" "}
            posted event.
          </Text>
        </Text>
      </Stack>
      <Stack direction={responsiveStack}>
        <FormControl>
          <FormLabel>Event title</FormLabel>
          <Input
            value={store.title}
            onChange={(e) => store.setTitle(e.target.value)}
          />
        </FormControl>
        <Spacer />
        <FormControl>
          <FormLabel>Event Description</FormLabel>
          <Textarea
            value={store.description}
            onChange={(e) => store.setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Event Tag</FormLabel>
          <Select
            onChange={(e) => store.setTag(e.target.value)}
            defaultValue={"Select"}
          >
            <option value="Select" disabled>
              Select
            </option>
            <option value="Tech">Tech</option>
            <option value="Science">Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Other">Other</option>
          </Select>
        </FormControl>
      </Stack>
      <Stack direction={responsiveStack}>
        <FormControl>
          <FormLabel>From Date</FormLabel>
          <Input
            value={store.fromDate}
            type={"datetime-local"}
            onChange={(e) => store.setFromDate(e.target.value)}
          />
        </FormControl>
        <Spacer />
        <FormControl>
          <FormLabel>To Date</FormLabel>
          <Input
            value={store.toDate}
            type={"datetime-local"}
            onChange={(e) => store.setToDate(e.target.value)}
          />
        </FormControl>
      </Stack>
      <Stack>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Upload Event Poster
        </Text>
        <Text>
          This poster will be displayed on you
          <Text display={"inline"} fontWeight={"bold"}>
            {" "}
            posted event.
          </Text>
        </Text>
      </Stack>
      <Input
        id="file"
        type={"file"}
        bgColor={"bg.black"}
        hidden
        onChange={handleChange}
      />
      <Text
        color={"white"}
        width={"sm"}
        borderRadius={"md"}
        bg={"black"}
        as={"label"}
        htmlFor={"file"}
        p={3}
      >
        <Center>Upload file</Center>
      </Text>
    </Stack>
  );
};
