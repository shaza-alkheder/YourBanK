import { IoIosCloseCircle } from "react-icons/io";
import "./ModalDashboard.css";
import FormDashboard from "../FormDashboard/FormDashboard";

const ModalDashboard = ({
  title = "",
  mode = "form",
  fields = [],
  data = {},
  onSubmit,
  onClose,
  onDelete,
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
              {mode === "delete" ? (
          <div className="S-K-Dashboard-Modal-delete">

            <p>
              Are you sure you want to delete this FAQ?
            </p>

            <div className="S-K-Dashboard-Modal-delete-buttons">

              <button
                type="button"
                className="S-K-Dashboard-Modal-cancel"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                type="button"
                className="S-K-Dashboard-Modal-delete-btn"
                onClick={onDelete}
              >
                Delete
              </button>

            </div>

          </div>
        ) : (
          <FormDashboard fields={fields} data={data} onSubmit={onSubmit} />
            )}

        </div>
      </div>
    </>
  );
};

export default ModalDashboard;
