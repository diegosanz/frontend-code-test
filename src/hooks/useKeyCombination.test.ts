import { act, renderHook } from "@testing-library/react-hooks";
import { useKeyCombination } from "./useKeyCombination";

describe("useKeyCombination", () => {
  const fireKeyboardEvent = (type: string, key: string) => {
    const event = new KeyboardEvent(type, { key });
    window.dispatchEvent(event);
  };

  it("call to callback with a correct combination", () => {
    const callback = jest.fn();
    renderHook(() => useKeyCombination(["Control", "z"], callback));

    act(() => {
      fireKeyboardEvent("keydown", "Control");
      fireKeyboardEvent("keydown", "z");
    });

    expect(callback).toHaveBeenCalled();

    act(() => {
      fireKeyboardEvent("keyup", "z");
      fireKeyboardEvent("keyup", "Control");
    });
  });

  it("dont call to callback with a incorrect combination", () => {
    const callback = jest.fn();
    renderHook(() => useKeyCombination(["Control", "z"], callback));

    act(() => {
      fireKeyboardEvent("keydown", "Control");
    });

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      fireKeyboardEvent("keydown", "a");
    });

    expect(callback).not.toHaveBeenCalled();

    act(() => {
      fireKeyboardEvent("keyup", "Control");
      fireKeyboardEvent("keyup", "a");
    });
  });

  it("case insensitive works", () => {
    const callback = jest.fn();
    renderHook(() => useKeyCombination(["Control", "Z"], callback));

    act(() => {
      fireKeyboardEvent("keydown", "control");
      fireKeyboardEvent("keydown", "z");
    });

    expect(callback).toHaveBeenCalled();

    act(() => {
      fireKeyboardEvent("keyup", "z");
      fireKeyboardEvent("keyup", "control");
    });
  });
});
