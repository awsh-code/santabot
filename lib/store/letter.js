const { create } = require("zustand");

const initialState = {
  letter: {
    step: 1,
  },
  childInfo: {
    name: "",
    gender: "",
    dob: "",
    toys: [],
  },
  letterPackage: {},
  childDetails: {
    bad: [],
    nice: [],
    other: [],
  },
  addressSelected: "",
  templateDetails: {
    template: "",
    font: "",
  },
};

export const useLetter = create((set) => ({
  ...initialState,
  increaseStep: () =>
    set((state) => {
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
      return {
        ...state,
        letterPackage: payload,
      };
    }),
  updateChildInfo: (payload) =>
    set((state) => {
      return {
        ...state,
        childInfo: payload,
      };
    }),
  updateChildDetails: (payload) =>
    set((state) => {
      return {
        ...state,
        childDetails: payload,
      };
    }),
  updateTemplateDetails: (payload) =>
    set((state) => {
      return {
        ...state,
        templateDetails: payload,
      };
    }),
  updateAddressSelected: (payload) =>
    set((state) => {
      return {
        ...state,
        addressSelected: payload,
      };
    }),

  resetLetter: () => {
    set(initialState);
  },
}));
