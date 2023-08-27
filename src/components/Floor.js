import React, { useState } from "react";
import "../components/Floor.css";
import { BsSearch } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.css";
import Popup from '../components/Popup'
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const Floor = () => {
  const [floor, setFloor] = useState([]);
  const [slotbtns, setSlotbtns] = useState([]);
  // const [displayInput,setDisplayInput] = useState(false);
  const [floorItemValue, setFloorItemValue] = useState("");
  const [aluthFloorItemName, setFloorItemName] = useState("");
  const [floorItemNamesArr, setFloorItemNamesArr] = useState([
    "Floor units",
    "Parking facility",
    "Gym facility",
    "Swim facility",
    "Open Space",
    "Other",
  ]);
  const [userTypeNamesArr, setuserTypeNamesArr] = useState([
    "Common",
    "Private",
    "Both",
  ]);
  const [memberTypeNamesArr, setmemberTypeNamesArr] = useState([
    "Build Users",
    "Members",
    "Common",
  ]);
  const [modalShow, setModalShow] = React.useState(false);

  const [first_row_data, setFirstRowData] = useState({
    floor_eke_id: "",
    dn_floor_ekt_dil_thin_nm: "",
    floor_ekt_den_aluth_code: "",
    floor_ekt_den_aluth_name: "",
  });

  const handleChange = (element_type, val) => {
    if (element_type == "floor_add") {
      setFloor([
        ...floor,
        {
          floor_id: Math.random(),
          floor_name: "floor " + val,
          floor_items: {},
        },
      ]);
      console.log(val, floor);
    }

    if (element_type == "floor_code") {
      console.log("floor_code ", val);
      setFirstRowData({ ...first_row_data, floor_ekt_den_aluth_code: val });
    }

    if (element_type == "floor_name") {
      console.log("floor_name ", val);
      setFirstRowData({ ...first_row_data, floor_ekt_den_aluth_name: val });
    }
    if (element_type == "floor_number") {
      console.log("floor_number ", val);
      setFirstRowData({ ...first_row_data, floor_eke_id: val });
    }

    if (element_type == "select_floor_item_name") {
      setFloorItemName(val);
    }

    if (element_type == "floor_item__value") {
      setFloorItemValue(val);
    }
    if(element_type == "slot_value_add"){
      setSlotbtns(val);
    }
  };
  const handleClick = (element_type) => {
    if (element_type == "save_btn") {
      var updateFloorArr = floor.filter((item, ind) => {
        if (item.floor_id == first_row_data.floor_eke_id) {
          item.floor_name =
            first_row_data.floor_ekt_den_aluth_code +
            "-" +
            first_row_data.floor_ekt_den_aluth_name;
          return item;
        } else {
          return item;
        }
      });
      setFloor(updateFloorArr);
    }
      
    if (element_type == "add_btn") {
      var updateBtn = floor.filter((item, ind) => {
        if (item.floor_id == first_row_data.floor_eke_id) {
          item.floor_items[`${aluthFloorItemName}`] = [];
          return item;
        } else {
          return item;
        }
      });
      console.log("save_floor_item_btn: ", updateFloorArr);
      setFloor(updateFloorArr);
    }

    if (element_type == "save_floor_item__value_btn") {
      var updateFloorArr = floor.filter((item, ind) => {
        let previousDataArr = [];
        if (item.floor_id == first_row_data.floor_eke_id) {
          if (
            item.floor_items[`${aluthFloorItemName}`] == undefined &&
            item.floor_items[`${aluthFloorItemName}`] == null
          ) {
            for(let i=0;i<slotbtns;i++){
            previousDataArr.push({ id: Math.random(), name: floorItemValue });
            item.floor_items[`${aluthFloorItemName}`] = previousDataArr;
            }
          } else {
            previousDataArr = item.floor_items[`${aluthFloorItemName}`];
            previousDataArr.push({ id: Math.random(), name: floorItemValue });
            item.floor_items[`${aluthFloorItemName}`] = previousDataArr;
          }

          return item;
        } else {
          return item;
        }
      });
      console.log("save_floor_item_btn: ", updateFloorArr);
      setFloor(updateFloorArr);
    }
  };
  return (
    <div className="container-fluid">
      <div className="container-2">
        <div className="row d-flex ">
          <div className="col-sm input-box">
            <input
              type="text"
              placeholder="Building name & code"
              class="form-control"
            />

            <BsSearch className="search-icon" />
          </div>

          <div className="col-sm">
            <input
              type="number"
              placeholder="No of floors"
              class="form-control"
              id="number_of_floor"
              onChange={(e) => {
                handleChange("floor_add", e.target.value);
              }}
            />
          </div>

          <div className="col-sm">
            <select
              onChange={(e) => {
                handleChange("floor_number", e.target.value);
              }}
              name="select_floor"
              id="select_floor"
              class="form-select"
            >
              <option>Floor no</option>
              {floor && floor.length > 0
                ? floor.map((item, ind) => (
                    <option key={item?.id} value={item?.floor_id}>
                      {item?.floor_name}
                    </option>
                  ))
                : ""}
            </select>
          </div>
          <div className="col-sm">
            <input
              type="text"
              placeholder="code"
              class="form-control "
              onChange={(e) => {
                handleChange("floor_code", e.target.value);
              }}
            />
          </div>
          <div className="col-sm">
            <input
              type="text"
              placeholder="name"
              class="form-control"
              onChange={(e) => {
                handleChange("floor_name", e.target.value);
              }}
            />
          </div>
          <div className="col-sm">
            <button
              onClick={(e) => {
                handleClick("save_btn");
              }}
              className="pr-5 pl-5 btn btn-secondary"
              type="text"
            >
              save
            </button>
          </div>
        </div>
      </div>
      <div className="container-2">
        <div className="row d-flex row-container-2">
          <div className="col">
            {/* <label>
            {floor
              .find((item) => item.floor_id == first_row_data.floor_eke_id)
              ?.floor_name?.toUpperCase()}
          </label> */}
            <select
              onChange={(e) => {
                handleChange("select_floor_item_name", e.target.value);
              }}
              name="add_floor_items"
              id="add_floor_items"
              class="form-select p-1"
            >
              <option>Add Floor Items</option>
              {floorItemNamesArr.map((item, ind) => (
                <option key={item?.id} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {/* <div className="pl-2 pb-0 pt-0">
          <button
            onClick={(e) => {
              handleClick('save_floor_item_btn')
            }}
            className="pr-5 pl-5 pb-0 btn btn-primary"
            type="text"
          >
            save floor item
          </button>
        </div> */}

          <div className="col">
            <input
              type="text"
              placeholder="Slot Name"
              class="form-control"
              id="floor_item__value"
              onChange={(e) => {
                handleChange("floor_item__value", e.target.value);
              }}
            />
          </div>
          <div className="col-sm">
            <input
              type="number"
              placeholder="No of floor units or parking slots"
              class="form-control"
              id="number_of_slots"
              onChange={(e) => {
                handleChange("slot_value_add", e.target.value);
                console.log(e.target.value,'add btn value');
              }}
              
            />
          </div>

          <div class="col">
            <select
              onChange={(e) => {
                handleChange("select_user_type_name", e.target.value);
              }}
              name="add_user_type"
              id="add_user_type"
              className="form-select p-1"
            >
              <option>Type of users</option>
              {userTypeNamesArr.map((item, ind) => (
                <option key={item?.id} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div class="col">
            <select
              onChange={(e) => {
                handleChange("select_member_type_name", e.target.value);
              }}
              name="add_member_type"
              id="add_member_type"
              className="form-select p-1"
            >
              <option>Type of members</option>
              {memberTypeNamesArr.map((item, ind) => (
                <option key={item?.id} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row row-container-2">
          <div className="col-6">
            <label class="switch">
              <input type="checkbox" id="togBtn" />
              <div class="slider round"></div>
            </label>
          </div>
          </div> 
          <div className="row row-container-2">
            <div className="justify-content-center">
              <button
                onClick={(e) => {
                  handleClick("save_floor_item__value_btn");
                }}
                className="pr-5 pl-5 pb-0 btn btn-secondary"
                type="text"
              >
                Add
              </button>
          
           
          </div>
        </div>
      </div>

      <div className="row  bg-lightning">
        {floor.map((item) => {
          return (
            <div
              className="col-12 pb-2 pt-2"
              style={{ border: "1px solid black" }}
            >
              <div className="col-12 bg-primary p-0">
                <h2 className="text-center">
                  {item?.floor_name?.toLowerCase()}
                </h2>
              </div>

              <div className="col-12">
                <div className="row">
                  {item?.floor_items &&
                  Object.keys(item?.floor_items).length > 0 ? (
                    <>
                      {Object.keys(item?.floor_items).map((floor_item_name) => {
                        return (
                          <div className="col">
                            <h4 className="text-center bg-dark text-light">
                              {floor_item_name?.toLowerCase()}
                            </h4>
                            <div className="row">
                              {item?.floor_items[`${floor_item_name}`] &&
                              item?.floor_items[`${floor_item_name}`].length >
                                0 ? (
                                <>
                                  {item?.floor_items[`${floor_item_name}`].map(
                                    (floor_item_data, ind) => {
                                      return (
                                        <div className="col" key={ind}>
                                          <button className= "btn btn-secondary"
                                          onClick={() => setModalShow(true)}>
                                          
                                          {floor_item_data?.name}
                                          </button>
                                          <Popup show={modalShow} onHide={() => setModalShow(false)} />
                                        </div>
                                      );
                                    }
                                  )}
                                </>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Floor;
