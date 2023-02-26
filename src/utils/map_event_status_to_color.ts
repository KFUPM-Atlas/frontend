import { EventStatus } from "../enums/event_status";

export const mapEventStatusToColor = (status: EventStatus): string => {
  switch (status) {
    case EventStatus.Pending:
      return "gray.500";
    case EventStatus.Approved:
      return "green.500";
    case EventStatus.Rejected:
      return "red.500";
  }
};
