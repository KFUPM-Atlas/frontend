import { SupervisorRequestStatusAR } from "../enums/supervisor_request_status_ar";

export const mapRequestStatusToColor = (status: SupervisorRequestStatusAR): string => {
    switch (status) {
        case SupervisorRequestStatusAR.New:
            return "gray.500";
        case SupervisorRequestStatusAR.Approved:
            return "green.500";
        case SupervisorRequestStatusAR.Rejected:
            return "red.500";
    }
};