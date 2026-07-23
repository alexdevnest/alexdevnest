import { Button } from "@ui/button";


const AddNewButton = ({ name }) => (
  <Button
    variant="ghost"
    className="add-new-btn"
  >
    <span>+</span>
    Add New {name }
  </Button>
)


export default AddNewButton;