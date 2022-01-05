import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(process.env.REACT_APP_FIRE_ADDRESS, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Adicionar Novo</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
