import React from "react";
import axios from "axios";
import ActiveClients from "./ActiveClients";
import UpcomingClients from "./UpcomingClients";

const ClientList = () => {
  const [activeVisits, setActiveVisits] = useState([]);
  const [upcomingVisits, setUpcomingVisits] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const getActiveVisits = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/v1/active`);
        console.log(res.data);
        setActiveVisits(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getUpcomingVisits = async () => {
      try {
        const res = await axios.get(`${baseURL}/api/v1/upcoming`);
        console.log(res.data);
        setUpcomingVisits(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUpcomingVisits();
    getActiveVisits();
  }, []);

  const checkOut = async (id) => {
    try {
      const res = await axios.put(`${baseURL}/api/v1/client/checkOut`, { id });
      console.log(id);
      setClients((prev) => prev.filter((client) => client._id !== id));
      console.log(res.data);
      console.log(clients);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIn = async (id) => {
    try {
      const res = await axios.put(`${baseURL}/api/v1/client/checkIn`, { id });
      console.log(id);
      setClients((prev) => prev.filter((client) => client._id !== id));

      //!need to also update the active clients somehow
      console.log(res.data);
      console.log(clients);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="header">Active Client</div>
      <div className="content">
        {activeVisits.map((visit) => {
          return <ActiveClients setActiveVisits={setActiveVisits} setUpcomingVisits={setUpcomingVisits} />
        })}
      </div>

      <div className="header">Upcoming Clients</div>
      <div className="content">
        {upcomingVisits.map((visit) => {
          return <UpcomingClients visit={visit} setActiveVisits={setActiveVisits} setUpcomingVisits={setUpcomingVisits}/>
        })}
      </div>
    </>
  );
};

export default ClientList;

//  {/* {activeClients.map((client) => {
//           if (client.active) {
//             return (
//               <>
//                 <div className="person up" onClick={() => checkOut(client._id)}>
//                   {/* //change that onclick so that instead of running the checkout function, it toggles your 'opencheckout' to be true or false */}
//                   <h5 className="name">{client.name}</h5>
//                   <h5 className="time">11:13 pm</h5>
//                   <h5 className="date">3/30/2022</h5>
//                 </div>
//                 <span className="underlined"></span>
//                 {/* //you can do the check for 'opencheckout' here, and then if the opencheckout is true,
//                 //it'll have a little input box that asks for the stylists pin and has a 'done' button
//                 //move the onClick={() => checkOut(client._id)} to this button so that this will run when the button is clicked
//                 //n the controller that the checkout function makes a call to, add a check that the pin is valid
//                 //then leave the rest of the controller as normal!! so it should change their active attribute to false ONLY if the pin is valid  */}
//               </>
//             );
//           }
//         })}

// {clients.map((client) => {
//     // needs check if they are upcoming or not
//     return (
//       <>
//         <div className="person up" onClick={() => checkIn(client._id)}>
//           <h5 className="name">{client.name}</h5>
//           <h5 className="time">11:13 pm</h5>
//           <h5 className="date">3/30/2022</h5>
//         </div>
//         <span className="underlined"> &#160;</span>
//         {/* <Divider fitted/> */}
//       </>
//     );
//   })}
