import React, { useState } from "react";
import { format } from "date-fns";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom"
import { deleteSpot } from "../../store/spot";



const SpotEditForm = ({ spot }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [errors, setErrors] = useState([]);



  const deleteThisSpot = () => {
    setErrors([]);
    return dispatch(deleteSpot(spot))
      .then(() => { history.push(`/`) })
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      })
  }

  return (
    <form className="spot-edit_form">
      <div>

        <button type="button" onClick={deleteThisSpot} >Delete</button>
      </div>

    </form>
  )
}

export default SpotEditForm;
