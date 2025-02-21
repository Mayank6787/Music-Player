import { Song } from "@/types";
import usePlayer from "./usePlayer";
import { useActionState } from "react";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (song: Song[]) => {
  const player = usePlayer();

  const authModal = useAuthModal();
  const { user } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }

    player.setId(id);
    player.setIds(song.map((song) => song.id));
  }

  return onPlay;
}

export default useOnPlay;