import "./AddForm.css";
export default function AddForm() {
  return (
    <>
      <h2>แอพบริหารการจัดการงาน</h2>
      <form >
       <div className="form-control">
       <input type="text" className="text-input" />
        <button type="submit" className="submit-btn">เพิ่ม</button>
       </div>
      </form>
    </>
  );
}
