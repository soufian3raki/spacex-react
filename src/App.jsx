import { useState, useEffect } from "react";
//! componentes de chakra
import { Center, Heading } from "@chakra-ui/react";
// componentes de react
import * as API from "./services/launches";
// importar imagen
import logo from "./assets/logo-spacex.png";
import { LaunchItem } from "./components/LaunchItem";

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <img src={logo} width={300} />
      <Heading as="h1" size="lg" m={4} align="center">
        SpaceX Launches
      </Heading>
      <section>
        {launches.map(launch => (
          <LaunchItem key={launch.flight_number} {...launch}/>
        ))}
      </section>
    </>
  )
}
