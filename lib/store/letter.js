const { create } = require("zustand");

export const useLetter = create((set) => ({
  letter: {
    step: 1,
    childInfo: {
      name: "",
      gender: "",
      dob: "",
      toys: [],
    },
    letterPackage: "",
    childDetails: {
      bad: [],
      nice: [],
      other: [],
    },
    templateDetails: {
      template: "",
      font: "",
    },
  },
  increaseStep: () =>
    set((state) => {
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
  updateLetterPackage: (payload) =>
    set((state) => {
      console.log("payload", payload);
      return {
        ...state,
        letter: {
          letterPackage: payload,
          ...state.letter,
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
  updateChildDetails: (payload) =>
    set((state) => {
      console.log("payload", payload);
      return {
        ...state,
        letter: {
          childDetails: payload,
          ...state.letter,
        },
      };
    }),
  updateTemplateDetails: (payload) =>
    set((state) => {
      console.log("payload", payload);
      return {
        ...state,
        letter: {
          templateDetails: payload,
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
