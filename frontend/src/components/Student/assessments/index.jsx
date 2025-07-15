

import { useHeading } from "../../../hooks/useHeading";
import CustomTable from "../../common/CustomTable";
import { useAssesmentsData } from "./hooks";
import { assesmentColumns } from "./utils";

function StudentAssesmentsPage() {
  const { setHeading, setSubheading } = useHeading();

  setHeading("Assesments");
  setSubheading("Take and manage your assesments here");

  const { rows = [], actions = [] } = useAssesmentsData();

  return (
    <div>
      <CustomTable columns={assesmentColumns} data={rows} actions={actions} />
    </div>
  );
}

export default StudentAssesmentsPage;