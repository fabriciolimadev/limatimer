import { produce } from "immer";
import { ActionTypes } from "./actions";
export interface Cycle {
    id: string;
    task: string;
    minutesAmount: number;
    isActive?: boolean;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
  }

export interface CyclesState {
  cycles: Cycle[];
  activeCycleId: string | null;
}

type ActionFunctionsTypes = {type: ActionTypes.ADD_NEW_CYCLE | ActionTypes.INTERRUPT_CURRENT_CYCLE | ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED , payload: { newCycle: Cycle } } ;


export function cyclesReducer(state: CyclesState, action: any) {
    switch (action.type) {
      case "ADD_NEW_CYCLE":

        return produce(state, (draft) => {
          draft.cycles.push(action.payload.newCycle)
          draft.activeCycleId = action.payload.newCycle.id;

        })

      case "INTERRUPT_CURRENT_CYCLE":
        // return {
        //   ...state,
        //   cycles: state.cycles.map((cycle) => {
        //     if (cycle.id === state.activeCycleId) {
        //       return { ...cycle, interruptedDate: new Date() };
        //     } else {
        //       return cycle;
        //     }
        //   }),
        //   activeCycleId: null,
        // };
        return produce(state, (draft) => {
          const currentCycleIndex = state.cycles.findIndex((cycle) => cycle.id === state.activeCycleId)
          
          if(currentCycleIndex < 0) {
            return
          }
          state.activeCycleId = null
          draft.cycles[currentCycleIndex].interruptedDate = new Date()
          
        })
      case "MARK_CURRENT_CYCLE_AS_FINISHED":
        // return {
        //   ...state,
        //   cycles: state.cycles.map((cycle) => {
        //     if (cycle.id === state.activeCycleId) {
        //       return { ...cycle, finishedDate: new Date() };
        //     } else {
        //       return cycle;
        //     }
        //   }),
        //   activeCycleId: null,
        // };
        return produce(state, (draft) => {
          const currentCycleIndex = state.cycles.findIndex((cycle) => cycle.id === state.activeCycleId)
          if(currentCycleIndex < 0) {
            return
          }
          draft.activeCycleId = null
          draft.cycles[currentCycleIndex].finishedDate = new Date()
        })
      default:
        return state;
    }
}