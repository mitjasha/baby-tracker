import { del, get, post, put } from "./api";
import { IChild, IEvent, IEventRequest, IEventResponse } from "./api.interface";

const eventController = {
  addEvent: (event: IEvent, accessToken: string, child: IChild) =>
    post<IEventResponse>(
      `/events/${child.id}/add`,
      JSON.stringify(event),
      accessToken,
    ),
  delEvent: (event: IEventRequest, accessToken: string) =>
    del(`/events/${event.id}`, accessToken),
  getAllEvents: (child: IChild, accessToken: string) =>
    get<IEventResponse[]>(`/events/${child.id}/getAll`, accessToken),
  updateEvent: (event: IEventRequest, accessToken: string) =>
    put(`/events/${event.id}`, accessToken),
};
export default eventController;
