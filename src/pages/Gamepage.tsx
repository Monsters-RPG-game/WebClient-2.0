import { Inventory } from '../components/root/Inventory';
import { MessagesWindow } from '../components/root/MessageWindow';
import { Map } from '../components/root/Map';

export const Gamepage = () => {
  return (
    <>
      <Map />
      <Inventory />
      <MessagesWindow />
    </>
  );
};
