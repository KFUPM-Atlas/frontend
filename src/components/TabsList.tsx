import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { COLORS } from "../core/constants";
import { TabElement } from "./TabElement";
interface TabsProps {}

export const TabsList: React.FC<TabsProps> = ({}) => {
  return (
    <Tabs pt={5}>
      <TabList borderColor="white">
        <TabElement title="Home" />
        <TabElement title="Popular" />
        <TabElement title="Latest" />
      </TabList>
    </Tabs>
  );
};
