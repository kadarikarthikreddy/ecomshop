import React, { useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import toast, { Toaster } from "react-hot-toast";

function ModelSection() {
  const [openModal, setOpenModal] = useState(false);
  const [user, setuser] = useState({
    Name: "",
    Address: "",
    Mobile: "",
    Pincode: "",
  });

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!user.Name || !user.Address || !user.Mobile || !user.Pincode) {
      return toast.error("All fields are required");
    } else {
      toast.success("Order Successfull");
      onCloseModal();
    }
  };

  function onCloseModal() {
    setOpenModal(false);
    setuser("");
  }
  return (
    <>
      <Button
        className="bg-indigo-500 font-semibold hover:bg-indigo-600  text-sm text-white uppercase w-full"
        onClick={() => setOpenModal(true)}
      >
        Checkout
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <div className="mb-1 block">
                <Label value="Your Full Name" />
              </div>
              <TextInput
                id="email"
                name="Name"
                value={user.Name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-1 block">
                <Label value="Mobile Number" />
              </div>
              <TextInput
                id="email"
                name="Mobile"
                value={user.Mobile}
                type="number"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-1 block">
                <Label value="Enter Full Address" />
              </div>
              <TextInput
                id="email"
                name="Address"
                value={user.Address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-1 block">
                <Label value="Enter Pincode" />
              </div>
              <TextInput
                id="password"
                name="Pincode"
                value={user.Pincode}
                onChange={handleChange}
                type="number"
                required
              />
            </div>
            <div className="w-full text-center mx-auto">
              <Button className="w-full bg-indigo-500" onClick={handlesubmit}>
                ORDER NOW
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Toaster />
    </>
  );
}

export default ModelSection;
