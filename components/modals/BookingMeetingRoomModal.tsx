"use client";

import { type Project } from "@/lib/data";
import GenericProjectModal from "./GenericProjectModal";

type Props = {
  project: Project;
  onClose: () => void;
};

export default function BookingMeetingRoomModal({ project, onClose }: Props) {
  return <GenericProjectModal project={project} onClose={onClose} />;
}
