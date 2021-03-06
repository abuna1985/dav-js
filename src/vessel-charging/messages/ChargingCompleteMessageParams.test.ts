import MessageParams from './ChargingCompleteMessageParams';

describe('MessageParams class', () => {
  const messageParams = new MessageParams({
    senderId: 'TOPIC_ID',
  });

  const serializedMessageParams: any = {
    ttl: undefined,
    protocol: 'vessel_charging',
    type: 'charging_complete_message',
    senderId: 'TOPIC_ID',
  };

  describe('serialize method', () => {
    it('should return serialized message params object with the current values', () => {
      expect(messageParams.serialize()).toEqual(serializedMessageParams);
    });
  });

  describe('deserialize method', () => {
    it('should return MessageParams instance with the current parameters', () => {
      const messageParamsObject = new MessageParams();
      messageParamsObject.deserialize(serializedMessageParams);
      expect(messageParamsObject).toEqual(messageParams);
    });
  });
});
