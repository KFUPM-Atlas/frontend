import { Box, AvatarGroup, Avatar } from "@chakra-ui/react";
import { COLORS } from "../core/constants";
import { useFetchUsers } from "../hooks/useFetchUsers";
import { returnIdsOnly } from "../utils/return_ids_only";
interface AvatarsProps {
  registrations: string[];
  size: "sm" | "md";
  type: "eventBox" | "eventPage";
}

export const Avatars: React.FC<AvatarsProps> = ({
  registrations,
  size,
  type,
}) => {
  const { users } = useFetchUsers(returnIdsOnly(registrations));
  return (
    <Box>
      {type == "eventPage" ? (
        <AvatarGroup color={COLORS.PRIMARY} size={size} max={3}>
          {users?.map((user) => (
            <Avatar name={user.name} src={user?.profilePictureUrl} />
          ))}
        </AvatarGroup>
      ) : (
        <AvatarGroup
          position="absolute"
          top={7}
          color={COLORS.PRIMARY}
          left={5}
          p={2}
          size={size}
          max={3}
        >
          {users?.map((user) => (
            <Avatar name={user.name} src={user?.profilePictureUrl} />
          ))}
        </AvatarGroup>
      )}
    </Box>
  );
};
