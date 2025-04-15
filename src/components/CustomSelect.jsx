import * as Select from "@radix-ui/react-select";
import { useState } from "react";

const CustomSelect = () => {
  // State to manage the selected value, default is "EN"
  const [selectedValue, setSelectedValue] = useState("hard");

  // List of all options
  const allOptions = [
    { value: "hard", label: "EN" },
    { value: "normal", label: "UZ" },
    { value: "easy", label: "RU" },
  ];

  // Filter options to exclude the currently selected value for the dropdown
  const filteredOptions = allOptions.filter(
    (option) => option.value !== selectedValue
  );

  // Find the label of the currently selected value to display in the trigger
  const selectedLabel =
    allOptions.find((option) => option.value === selectedValue)?.label ||
    "Choose language";

  return (
    <Select.Root
      value={selectedValue} // Controlled value
      onValueChange={(value) => setSelectedValue(value)} // Update state on change
    >
      <Select.Trigger
        className="
          bg-gray-900 
          text-white 
          px-4 
          py-2.5 
          rounded-xl 
          text-left 
          appearance-none 
          focus:ring-2 
          focus:ring-yellow-400 
          focus:outline-none 
          hover:bg-gray-800 
          transition 
          duration-200 
          flex 
          items-center 
          justify-between 
          shadow-lg 
          border 
          border-gray-800
        "
      >
        {/* Explicitly display the selected label */}
        <Select.Value className="text-gray-200 font-medium">
          {selectedLabel}
        </Select.Value>
        <Select.Icon className="text-yellow-400 ml-2">
          <svg
            className="w-5 h-5 transition-transform duration-200 group-data-[state=open]:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Select.Icon>
      </Select.Trigger>

      <Select.Content
        className="
          mt-1 
          bg-gray-900 
          rounded-xl 
          shadow-xl 
          border 
          border-gray-800 
          py-2 
          max-h-64 
          overflow-y-auto
          z-50
        "
      >
        <Select.ScrollUpButton
          className="
            flex 
            items-center 
            justify-center 
            h-6 
            bg-gray-900 
            text-yellow-400 
            sticky 
            top-0
            data-[state=hidden]:hidden
          "
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </Select.ScrollUpButton>

        <Select.Viewport>
          {/* Render only the filtered options (excluding the selected language) */}
          {filteredOptions.map((option) => (
            <Select.Item
              key={option.value}
              value={option.value}
              className="
                px-4 
                py-2.5 
                text-gray-200 
                cursor-pointer 
                hover:bg-gray-800 
                focus:bg-gray-800 
                focus:outline-none 
                data-[highlighted]:bg-gray-800 
                data-[highlighted]:text-yellow-400 
                transition-colors 
                duration-150 
                mx-1 
                rounded-lg 
                font-medium
              "
            >
              <Select.ItemText>{option.label}</Select.ItemText>
            </Select.Item>
          ))}
        </Select.Viewport>

        <Select.ScrollDownButton
          className="
            flex
            items-center 
            justify-center 
            h-6 
            bg-gray-900 
            text-yellow-400 
            sticky
            bottom-0
            data-[state=hidden]:hidden
          "
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Root>
  );
};

export default CustomSelect;
