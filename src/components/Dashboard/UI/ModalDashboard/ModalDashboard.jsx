import { IoIosCloseCircle } from "react-icons/io";
import "./ModalDashboard.css";
import FormDashboard from "../FormDashboard/FormDashboard";

const ModalDashboard = ({
  title = "",
  fields = [],
  data = {},
  onSubmit,
  onClose,
}) => {
  return (
    <>
      <div className="S-K-Dashboard-Modal">
        <div className="S-K-Dashboard-Modal-box">
          <button
            type="button"
            className="S-K-Dashboard-Modal-close"
            onClick={onClose}
          >
            <IoIosCloseCircle />
          </button>
          <div className="S-K-Dashboard-Modal-header">
            <h2>{title}</h2>
          </div>
          <FormDashboard fields={fields} data={data} onSubmit={onSubmit} />
        </div>
      </div>
    </>
  );
};

export default ModalDashboard;
