export const actions = {
  REQUEST_INFO_WORKER: 'REQUEST_INFO_WORKER',
  ADD_WORK: 'ADD_WORK',
};

export const getInforWorkerAction = (payload) => ({
  type: actions.REQUEST_INFO_WORKER, payload,
});

export const addWorkAction = (payload) => ({
  type: actions.ADD_WORK, payload,
});