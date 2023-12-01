const { create } = require("zustand");

export const useLetter = create((set) => ({
  letter: {
    step: 0,
    childInfo: {
      name: "",
      gender: "",
      dob: "",
      toys: [],
    },
  },
  increaseStep: () =>
    set((state) => {
      console.log("q rico");
      console.log("state", state);
      return {
        ...state,
        letter: {
          step: state.letter.step + 1,
        },
      };
    }),
  decreaseStep: () =>
    set((state) => {
      if (state.count === 0) return state;
      return {
        ...state,
        letter: {
          step: state.letter.step - 1,
        },
      };
    }),
  updateChildInfo: (payload) =>
    set((state) => {
      console.log("payload", payload);
      return {
        ...state,
        letter: {
          childInfo: payload,
          ...state.letter,
        },
      };
    }),

  // resetSteps: () =>
  //   set((state) => ({
  //     ...state,
  //     letter: 0,
  //   })),
}));
