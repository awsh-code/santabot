const { create } = require("zustand");

export const useLetter = create((set) => ({
  letter: {
    step: 1,
  },
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
        letterPackage: payload,
      };
    }),
  updateChildInfo: (payload) =>
    set((state) => {
      console.log("payload", payload);
      return {
        ...state,
        childInfo: payload,
      };
    }),
  updateChildDetails: (payload) =>
    set((state) => {
      console.log("state", state.letter);
      console.log("payload", payload);
      return {
        ...state,
        childDetails: payload,
      };
    }),
  updateTemplateDetails: (payload) =>
    set((state) => {
      console.log("payload", payload);
      return {
        ...state,
        templateDetails: payload,
      };
    }),

  // resetSteps: () =>
  //   set((state) => ({
  //     ...state,
  //     letter: 0,
  //   })),
}));
