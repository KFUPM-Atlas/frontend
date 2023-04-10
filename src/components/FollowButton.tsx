import { Button } from "@chakra-ui/react";
import { COLORS } from "../core/constants";
import { useState } from "react";
import { useFirestoreFollowers } from "../hooks/useFirestoreFollowers";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCheckFollow } from "../hooks/useCheckFollow";
interface FollowButtonProps {
  club: any;
}

export const FollowButton: React.FC<FollowButtonProps> = ({ club }) => {
  const { createFollow, removeFollow } = useFirestoreFollowers();
  const { user } = useAuthContext();

  const { hasFollow, follow, loading } = useCheckFollow(
    club?.clubId,
    user?.uid
  );

  return (
    <>
      {!loading && hasFollow && (
        <Button
          bgColor={COLORS.PRIMARY}
          color={"white"}
          border="1px"
          px={8}
          borderRadius="full"
          onClick={() => removeFollow(follow.id)}
          _focus={{ bgColor: COLORS.PRIMARY }}
        >
          {"Followed"}
        </Button>
      )}
      {!loading && !hasFollow && (
        <Button
          bgColor={"white"}
          color={COLORS.PRIMARY}
          border="1px"
          px={8}
          borderRadius="full"
          onClick={() => createFollow(user.uid, club.clubId)}
          _focus={{ bgColor: "white" }}
        >
          {"Follow"}
        </Button>
      )}
    </>
  );
};
