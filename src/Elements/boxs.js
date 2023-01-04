import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import { ReactComponent as Iconsearch } from "../Images/icons-search.svg";
import { useDetectOutsideClick } from "../Hocks/useDetectOutsideClick";

export const Textbox = ({
  label,
  placeholder,
  value,
  onChange,
  readOnly,
  width,
  name,
  errorsMessage,
  Numberonly,
}) => {
  return (
    <div className="p-1 w-full h-[73px]">
      <label className=" font-Nunito font-bold text-sm">{label}</label>
      <input
        className="  pl-1 text-sm  w-full h-[35px]  bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 
               focus:ring-sky-500 block  rounded-md   "
        type="text"
        placeholder={placeholder}
        value={value === null ? "" : value}
        onChange={(e) => onChange(e.target.value, name)}
        style={{ width: width }}
        readOnly={readOnly}
        onKeyPress={(e) => {
          if (!/[0-9]/.test(e.key) && Numberonly === true) {
            e.preventDefault();
          }
        }}
      />

      <div className=" text-red-700/70 text-[10px] font-bold">
        {errorsMessage && <p>{errorsMessage}</p>}
      </div>
    </div>
  );
};

export const MidTextbox = ({
  label,
  placeholder,
  width,
  height,
  name,
  onChange,
  value,
}) => {
  return (
    <React.Fragment>
      <label className=" font-Nunito font-bold text-sm">{label}</label>
      <textarea
        className="  p-4  w-full h-full  bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 
                 focus:ring-sky-500 block  rounded-md  text-sm  "
        type="text"
        placeholder={placeholder}
        style={{ width: width, height: height }}
        onChange={(e) => onChange(e.target.value, name)}
        value={value === null ? "" : value}
      />
    </React.Fragment>
  );
};

export const Combbox = ({
  label,
  placeholder,
  Data,
  onClick,
  errorMessage,
  field,
  name,
  errorsMessage,
  foucs,
  value,
}) => {
  const [selected, setSelected] = useState("");
  const [searchValue, setSearch] = useState("");

  const combref = useRef(null);
  const [userdropdownOpen, setUserdropdown] = useDetectOutsideClick(
    combref,
    false
  );

  useEffect(() => {
    if (value) setSelected(value);
  }, [value]);

  const serachedValue = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  if (!selected) errorMessage = " Please Select Value";

  let ColumnName = null;
  if (!field) ColumnName = Object.keys(Data[0]);

  const CurrentValue = Data.filter((data) =>
    data[field ? field : ColumnName]?.toLocaleLowerCase().includes(searchValue)
  );

  return (
    <div
      className={`${userdropdownOpen && "relative "}    p-1  w-full  h-[73px]`}
      ref={combref}
    >
      <label className={` font-Nunito font-bold text-sm`}>{label}</label>

      <div className="    w-full font-medium   ">
        <div
          onClick={() => {
            setUserdropdown(!userdropdownOpen);
          }}
          className={`bg-white w-full  text-sm   flex items-center justify-between  p-1 rounded border shadow-sm  h-[35px] 
          ${!selected && "text-gray-700"} ${
            foucs && userdropdownOpen ? `border-[${foucs}]` : ""
          }`}
        >
          {selected ? selected : placeholder}

          <BiChevronDown
            size={18}
            className={`   ${userdropdownOpen && "rotate-180 "}`}
          />
        </div>

        <ul
          className={`bg-white    absolute  w-[calc(100%-10px)]  ${
            userdropdownOpen
              ? "  border-x   border-b shadow-sm max-h-[120px]  ease-in-out duration-300"
              : "max-h-0  "
          }         ${
            CurrentValue.length > 2 ? " overflow-y-auto" : "  overflow-y-hidden"
          }       ${
            foucs && userdropdownOpen ? "border-[#0ea5e9]" : ""
          }        `}
        >
          <div className=" flex items-center top-0 bg-white  sticky">
            <input
              onChange={serachedValue}
              value={searchValue}
              className="   w-[calc(100%-10px)]  pl-10  h-[32px]  text-sm bg-white placeholder-slate-400            block  outline-none  "
              type="text"
              placeholder="Search "
            />
            <Iconsearch
              className=" absolute top-[10px]  left-3  fill-[#868FA0] text-cyan-600  AAA"
              height="15px"
              width="15px"
            />
          </div>
          {CurrentValue.map((data, index) => (
            <li
              key={index}
              className=" p-2 text-sm hover:bg-sky-600  hover:text-white"
              onClick={() => {
                if (
                  data[field ? field : ColumnName].toLocaleLowerCase() !==
                  searchValue.toLocaleLowerCase()
                ) {
                  onClick(data[field ? field : ColumnName], name);
                  setSelected(data[field ? field : ColumnName]);
                  setUserdropdown(false);
                  setSearch("");
                }
              }}
            >
              {data[field ? field : ColumnName]}
            </li>
          ))}
        </ul>
      </div>
      <div className=" text-red-700/70 text-[10px] font-bold">
        {errorsMessage && <p>{errorsMessage}</p>}
      </div>
    </div>
  );
};

export const CombboxNormal = ({ TextboxName, placeholder }) => {
  return (
    <React.Fragment>
      <label
        for="small"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Small select
      </label>
      <select
        id="small"
        className="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </React.Fragment>
  );
};

export const DateTimePickeRange = ({
  label,
  disabled,
  errorsMessage,
  ende,
  onClick,
  value,
}) => {
  const dateRef = useRef(null);

  const [showCalender, setShowCalender] = useDetectOutsideClick(dateRef, false);

  const [date, setDate] = useState(new Date());
  const [selectDate, setSelectDate] = useState(null);

  /////////---

  const inputRef = useRef();

  const SelectDate = (value) => {
    var datetime = new Date(value);

    datetime.setHours(datetime.getHours() + 23);

    if (new Date()?.getTime() - 23 * 60 * 60 * 1000 <= value.getTime())
      ende ? setSelectDate(datetime) : setSelectDate(value);

    setShowCalender(!showCalender);
  };

  useEffect(() => {
    if (value === null) return setSelectDate(null);
    setSelectDate(new Date(value));
  }, [value]);

  ////---------------------------
  const getDayNumber = (date) => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const chosenDate = new Date(date);
    const dateString = chosenDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const dayOfWeek = dateString.substring(0, 3);
    const dayOfWeekNumber = weekdays.indexOf(dayOfWeek);

    return dayOfWeekNumber;
  };

  ////---------------------------
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const Calender = () => {
    const handlePrevClick = () => {
      setDate(new Date(date.getFullYear(), date.getMonth() - 0, 0));
    };

    const handleNextClick = () => {
      setDate(new Date(date.getFullYear(), date.getMonth() + 2, 0));
    };

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevMonthDayNumber = getDayNumber(
      new Date(date.getFullYear(), date.getMonth(), 0)
    );
    const NexMonthDayNumber = getDayNumber(
      new Date(date.getFullYear(), date.getMonth() + 1, 1)
    );

    const f = new Date(
      date.getFullYear(),
      date.getMonth(),
      0 - prevMonthDayNumber
    ).getDate();
    const l = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const fristDayNextMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      1
    ).getDate();

    const lastdayNextMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 2,
      0
    ).getDate();

    let days = [];

    if (prevMonthDayNumber < 6)
      for (let i = f; i <= l; i++)
        days.push(
          <span
            key={i + 3 * 5}
            className=" block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  font-semibold text-sm text-gray-200 "
          >
            {i}
          </span>
        );

    for (let i = firstDay; i <= lastDay; i++)
      days.push(
        <span
          key={i}
          className={`datepicker-cell ${
            new Date()?.getTime() - 23 * 60 * 60 * 1000 <=
            new Date(date.getFullYear(), date.getMonth(), i)?.getTime()
              ? " hover:bg-blue-500 hover:text-white"
              : " text-gray-300"
          }    ${
            selectDate?.getTime() ===
            new Date(date.getFullYear(), date.getMonth(), i).getTime()
              ? " bg-blue-500 text-white"
              : ""
          } 
          



          ${
            selectDate?.getTime() ===
            new Date(
              new Date(date.getFullYear(), date.getMonth(), i).getTime() +
                23 * 60 * 60 * 1000
            ).getTime()
              ? " bg-blue-500 text-white"
              : ""
          }          
          
          
          
          block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm  `}
          onClick={() => {
            if (
              new Date()?.getTime() - 23 * 60 * 60 * 1000 <=
              new Date(date.getFullYear(), date.getMonth(), i)?.getTime()
            )
              SelectDate(new Date(date.getFullYear(), date.getMonth(), i));

            if (ende) {
              var datetime = new Date(
                new Date(date.getFullYear(), date.getMonth(), i)
              );

              datetime.setHours(datetime.getHours() + 23);

              return onClick(datetime);
            }

            return onClick(new Date(date.getFullYear(), date.getMonth(), i));
          }}
        >
          {i}
        </span>
      );

    let addDay = 0;
    for (let i = NexMonthDayNumber; i <= lastdayNextMonth; i++) {
      days.push(
        <span
          key={i + 8 * 89}
          className="block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  font-semibold text-sm text-gray-200 "
        >
          {fristDayNextMonth + addDay}
        </span>
      );
      addDay++;
      if (days.length > 41) break;
    }

    return (
      <div className=" p-1">
        <div className="   p-5 bg-white   w-full border-x   border-b shadow-sm  ">
          <div className=" flex flex-wrap items-center justify-between ">
            <button
              className="bg-white   rounded-l hover:bg-gray-100 hover:text-gray-900 text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              onClick={(e) => {
                e.preventDefault();
                handlePrevClick();
              }}
            >
              <GrLinkPrevious />
            </button>

            <span className="text-sm  font-semibold rounded-lg text-gray-900 py-2.5 px-5">
              {month} {year}
            </span>

            <button
              className="bg-white     rounded-l hover:bg-gray-100 hover:text-gray-900 text-lg p-2.5 focus:outline-none focus:ring-2 foc:ring-gray-200 us"
              onClick={(e) => {
                e.preventDefault();
                handleNextClick();
              }}
            >
              <GrLinkNext />
            </button>
          </div>

          <div className="  grid grid-cols-7 ">
            <span className=" dow text-center h-6 leading-6 text-sm font-medium text-gray-500">
              Su
            </span>
            <span className=" dow text-center h-6 leading-6 text-sm font-medium text-gray-500">
              Mo
            </span>
            <span className=" dow text-center h-6 leading-6 text-sm font-medium text-gray-500">
              Tu
            </span>
            <span className=" dow text-center h-6 leading-6 text-sm font-medium text-gray-500">
              We
            </span>
            <span className=" dow text-center h-6 leading-6 text-sm font-medium text-gray-500">
              Th
            </span>
            <span className=" dow text-center h-6 leading-6 text-sm font-medium text-gray-500">
              Fr
            </span>
            <span className=" dow text-center h-6 leading-6 text-sm font-medium text-gray-500">
              St
            </span>
          </div>
          <div className="  grid grid-cols-7 grid-rows-5 ">{days}</div>
        </div>
      </div>
    );
  };

  const ShowDate =
    selectDate &&
    new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hourCycle: "h23",
    }).format(selectDate);

  return (
    <div
      className={`${showCalender && "relative "}    p-1  w-full `}
      ref={dateRef}
    >
      <div className="p-1 w-full h-[73px]">
        <label className="   font-Nunito font-bold text-sm">{label}</label>

        <input
          ref={inputRef}
          type="text"
          value={ShowDate === null ? "" : ShowDate}
          className="  pl-1 text-sm  w-full h-[35px]  bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 
               focus:ring-sky-500 block  rounded-md   "
          onClick={() => setShowCalender(!showCalender)}
          disabled={disabled}
          readOnly={true}
        />

        {showCalender && Calender()}

        <div className=" text-red-700/70 text-[10px] font-bold">
          {errorsMessage && <p>{errorsMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export const Daterange = ({
  nameDateRange1,
  nameDateRange2,
  getValueStarDate,
  getValueEndDate,
  labelStartDate,
  labelEndeDate,
  errorsMessageStartDate,
  errorsMessageEndetDate,
  valueStartDate,
  valueEndDate,
}) => {
  return (
    <div>
      <DateTimePickeRange
        label={labelStartDate}
        onClick={(value) => {
          getValueStarDate(value, nameDateRange1);
        }}
        errorsMessage={errorsMessageStartDate}
        value={valueStartDate}
      />

      <DateTimePickeRange
        label={labelEndeDate}
        disabled={false}
        ende={true}
        onClick={(value) => getValueEndDate(value, nameDateRange2)}
        errorsMessage={errorsMessageEndetDate}
        value={valueEndDate}
      />
    </div>
  );
};

export const DateTimePickeRange2 = ({
  label,

  errorsMessage,
}) => {
  const dateRef = useRef(null);

  const [showCalender, setShowCalender] = useDetectOutsideClick(dateRef, false);

  const [date, setDate] = useState(new Date());
  const [selectDate, setSelectDate] = useState(null);

  /////////---

  const SelectDate = (value) => {
    setSelectDate(value);

    if (date.getTime() < selectDate?.getTime()) console.log("aaa");
  };

  ////---------------------------
  const getDayNumber = (date) => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const chosenDate = new Date(date);
    const dateString = chosenDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const dayOfWeek = dateString.substring(0, 3);
    const dayOfWeekNumber = weekdays.indexOf(dayOfWeek);

    return dayOfWeekNumber;
  };

  ////---------------------------
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  const Calender = () => {
    const handlePrevClick = () => {
      setDate(new Date(date.getFullYear(), date.getMonth() - 0, 0));
    };

    const handleNextClick = () => {
      setDate(new Date(date.getFullYear(), date.getMonth() + 2, 0));
    };

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDate();
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();

    const prevMonthDayNumber = getDayNumber(
      new Date(date.getFullYear(), date.getMonth(), 0)
    );
    const NexMonthDayNumber = getDayNumber(
      new Date(date.getFullYear(), date.getMonth() + 1, 1)
    );

    const f = new Date(
      date.getFullYear(),
      date.getMonth(),
      0 - prevMonthDayNumber
    ).getDate();
    const l = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const fristDayNextMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      1
    ).getDate();

    const lastdayNextMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 2,
      0
    ).getDate();

    let days = [];

    if (prevMonthDayNumber < 6)
      for (let i = f; i <= l; i++)
        days.push(
          <span
            key={i + 3 * 5}
            className="hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  font-semibold text-sm text-gray-500 "
          >
            {i}
          </span>
        );

    for (let i = firstDay; i <= lastDay; i++)
      days.push(
        <span
          key={i}
          className={`datepicker-cell ${
            selectDate?.getTime() ===
            new Date(date.getFullYear(), date.getMonth(), i).getTime()
              ? "bg-blue-500 text-white"
              : ""
          } hover:bg-blue-500 hover:text-white block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 font-semibold text-sm  `}
          onClick={() =>
            SelectDate(new Date(date.getFullYear(), date.getMonth(), i))
          }
        >
          {i}
        </span>
      );

    let addDay = 0;
    for (let i = NexMonthDayNumber; i <= lastdayNextMonth; i++) {
      days.push(
        <span
          key={i + 8 * 89}
          className="hover:bg-gray-100 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center  font-semibold text-sm text-gray-500 "
        >
          {fristDayNextMonth + addDay}
        </span>
      );
      addDay++;
      if (days.length > 41) break;
    }

    return (
      <div className=" p-1">
        <div className="   p-5 bg-white   w-full border-x   border-b shadow-sm  ">
          <div className=" flex flex-wrap items-center justify-between ">
            <button
              className="bg-white   rounded-l hover:bg-gray-100 hover:text-gray-900 text-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              onClick={(e) => {
                e.preventDefault();
                handlePrevClick();
              }}
            >
              <GrLinkPrevious />
            </button>

            <span className="text-sm  font-semibold rounded-lg text-gray-900 py-2.5 px-5">
              {month} {year}
            </span>

            <button
              className="bg-white     rounded-l hover:bg-gray-100 hover:text-gray-900 text-lg p-2.5 focus:outline-none focus:ring-2 foc:ring-gray-200 us"
              onClick={(e) => {
                e.preventDefault();
                handleNextClick();
              }}
            >
              <GrLinkNext />
            </button>
          </div>

          <div className="  grid grid-cols-7 ">
            <span className=" dow text-center h-6 leading-6 text-sm font-medium text-gray-500">
              Su
            </span>
            <span className=" dow text-center h-6 leading-6 text-sm font-medium text-gray-500">
              Mo
            </span>
            <span className=" dow text-center h-6 leading-6 text-sm font-medium text-gray-500">
              Tu
            </span>
            <span className=" dow text-center h-6 leading-6 text-sm font-medium text-gray-500">
              We
            </span>
            <span className=" dow text-center h-6 leading-6 text-sm font-medium text-gray-500">
              Th
            </span>
            <span className=" dow text-center h-6 leading-6 text-sm font-medium text-gray-500">
              Fr
            </span>
            <span className=" dow text-center h-6 leading-6 text-sm font-medium text-gray-500">
              St
            </span>
          </div>
          <div className="  grid grid-cols-7 grid-rows-5 ">{days}</div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`${showCalender && "relative "}    p-1  w-full `}
      ref={dateRef}
    >
      <div className="p-1 w-full h-[73px]">
        <label className="   font-Nunito font-bold text-sm">{label}</label>

        <input
          type="text"
          value={
            selectDate?.toLocaleDateString("en-US", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }) || ""
          }
          className="  pl-1 text-sm  w-full h-[35px]  bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 
               focus:ring-sky-500 block  rounded-md   "
          onClick={() => setShowCalender(!showCalender)}
        />

        {showCalender && Calender()}

        <div className=" text-red-700/70 text-[10px] font-bold">
          {errorsMessage && <p>{errorsMessage}</p>}
        </div>
      </div>
    </div>
  );
};

//////<li key={index} className=" p-2 text-sm hover:bg-sky-600">
