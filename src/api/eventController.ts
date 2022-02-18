import { del, get, post, put } from "./api";
import { IChild, IEvent, IEventRequest, IEventResponse } from "./api.interface";

const eventController = {
  addEvent: (event: IEvent, childID: string) =>
    post<IEventResponse>(`/events/${childID}/add`, JSON.stringify(event)),
  delEvent: (event: IEventRequest) => del(`/events/${event.id}`),
  getAllEvents: (child: IChild) =>
    get<IEventResponse[]>(`/events/${child.id}/getAll`),
  updateEvent: (event: IEventRequest) =>
    put(`/events/${event.id}`, JSON.stringify(event)),
};
export default eventController;
