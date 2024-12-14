import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photoUrl } =
    coffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };
    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F3F4F0] p-24">
      <h2 className="text-3xl font-extrabold text-center">Update Coffee</h2>
      <form onSubmit={handleUpdateCoffee} className="w-full mx-auto">
        <div className="md:flex gap-2 w-full mx-auto">
          <div className="w-full">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Coffee Name</span>
              </div>
              <input
                type="text"
                placeholder="name"
                defaultValue={name}
                name="name"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
          <div className="w-full">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Quantity</span>
              </div>
              <input
                type="text"
                placeholder="Coffee Name"
                defaultValue={quantity}
                name="quantity"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
        </div>
        <div className="md:flex gap-2 w-full mx-auto">
          <div className="w-full">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Supplier</span>
              </div>
              <input
                type="text"
                placeholder="supplier Name"
                defaultValue={supplier}
                name="supplier"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
          <div className="w-full">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
              <input
                type="text"
                placeholder="Taste"
                defaultValue={taste}
                name="taste"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
        </div>
        <div className="md:flex gap-2 w-full mx-auto">
          <div className="w-full">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                placeholder="Category"
                defaultValue={category}
                name="category"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
          <div className="w-full">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Details</span>
              </div>
              <input
                type="text"
                placeholder="Details"
                defaultValue={details}
                name="details"
                className="input input-bordered w-full "
              />
              <div className="label"></div>
            </label>
          </div>
        </div>
        <div className="label">
          <span className="label-text">Photo URL</span>
        </div>
        <input
          type="text"
          placeholder="Photo URL"
          defaultValue={photoUrl}
          name="photoUrl"
          className="input input-bordered input-accent w-full "
        />
        <button type="submit" className="btn btn-block btn-primary mt-4">
          update Coffee
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffee;
