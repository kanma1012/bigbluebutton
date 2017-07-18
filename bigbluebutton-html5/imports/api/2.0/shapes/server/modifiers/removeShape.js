import { check } from 'meteor/check';
import Shapes from '/imports/api/2.0/shapes';
import Logger from '/imports/startup/server/logger';

export default function removeShape(meetingId, whiteboardId, shapeId) {
  check(meetingId, String);
  check(whiteboardId, String);
  check(shapeId, String);

  const selector = {
    meetingId,
    whiteboardId,
    'shape.id': shapeId,
  };

  const cb = (err) => {
    if (err) {
      return Logger.error(`Removing shape2x from collection: ${err}`);
    }

    return Logger.info(`Removed shape2x id=${shapeId} whiteboard=${whiteboardId}`);
  };

  return Shapes.remove(selector, cb);
}
