//@ts-ignore
import EventEmitterHandler from "@/Utils/EventEmitterHandler";
import { useEffect, useRef } from "react";

function useEventEmitter(event: string, onEvent: (data: any) => void) {
  const eventRef = useRef(event);
  const onEventRef = useRef(onEvent);

  useEffect(() => {
    const subscription = EventEmitterHandler.addListener(
      eventRef.current,
      onEventRef.current
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);
}

export default useEventEmitter;

export const emitEvent = (event: string, data?: any) => {
  EventEmitterHandler.emit(event, data);
};
