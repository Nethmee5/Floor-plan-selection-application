import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Popup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Pop up window
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
   
        <label class="switch">
          <input type="checkbox" id="togBtn" />Active
          <div class="slider round"></div>
        </label>
   
    

        <div className="col-12 form">
            <input
              type="text"
              placeholder="Code"
              class="form-control"
              // onChange={(e) => {
              //   handleChange("floor_code", e.target.value);
              // }}
            />
          </div><br/>
          <div className="col-12">
            <input
              type="text"
              placeholder="Name"
              class="form-control "
              // onChange={(e) => {
              //   handleChange("floor_code", e.target.value);
              // }}
            />
          </div><br/>
          <div className="col-12">
            <input
              type="text"
              placeholder="Amount"
              class="form-control "
              // onChange={(e) => {
              //   handleChange("floor_code", e.target.value);
              // }}
            />
          </div><br/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button onClick={props.onHide}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Popup;
