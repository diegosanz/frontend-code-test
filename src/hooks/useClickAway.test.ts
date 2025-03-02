import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import { useClickAway } from "./useClickAway";

describe("useClickAway", () => {
  test("should call the handler when clicking outside the element", () => {
    const handler = jest.fn();
    const ref = {
      current: document.createElement("div"),
    };

    renderHook(() => useClickAway(ref, handler));

    // Simulate a click outside the element
    fireEvent.click(document);

    expect(handler).toHaveBeenCalledTimes(1);
  });

  test("should not call the handler when clicking inside the element", () => {
    const handler = jest.fn();
    const ref = {
      current: document.createElement("div"),
    };

    renderHook(() => useClickAway(ref, handler));

    // Simulate a click inside the element
    fireEvent.click(ref.current);

    expect(handler).not.toHaveBeenCalled();
  });

  test("should work with multiple refs", () => {
    const handler = jest.fn();
    const ref1 = {
      current: document.createElement("div"),
    };
    const ref2 = {
      current: document.createElement("div"),
    };

    renderHook(() => useClickAway([ref1, ref2], handler));

    // Simulate a click outside both elements
    fireEvent.click(document);

    expect(handler).toHaveBeenCalledTimes(1);

    // Simulate a click inside
    fireEvent.click(ref1.current);
    fireEvent.click(ref2.current);

    expect(handler).toHaveBeenCalledTimes(1);
  });
});
