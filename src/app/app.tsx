// import Button from "@shared/ui/components/button";
import {ReactNode} from "react";
import globalStore from "@entities/store";
import AppProviders from "@app/providers/appProviders.tsx";
import MainPage from "@pages/main/mainPage.tsx";

const App = ():ReactNode => {

  console.log(globalStore.state);

  return (
    <AppProviders>
      <MainPage/>
    </AppProviders>
)};

export default App
