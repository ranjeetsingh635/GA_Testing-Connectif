import axios, { AxiosRequestConfig } from "axios";
// import { getAuthValue } from "../Modules/AuthModule/Hooks/useAuthValue";
// import AuthService from "../Modules/AuthModule/Services/AuthService";
import SnackbarHandler from "./SnackbarHandler";
//@ts-ignore
import sc from "states-cities-db";
import { getAuthValue } from "../Modules/AuthModule/Hooks/useAuthValue";
import { NextRouter } from "next/router";

export const COUNTRIES = sc.getCountries();

export const countryOptions = COUNTRIES.map(({ name, prefix }: any) => ({
  label: prefix + " - " + name,
  value: prefix,
}));

export const fetcher = (config: AxiosRequestConfig) => {
  const { url, method = "GET", data, headers } = config;
  const { token } = getAuthValue();

  return axios.request({
    baseURL: `http://3.28.9.147:3000/`,
    url,
    method,
    data,
    headers: {
      Authorization: `Bearer ${token ?? ""}`,
      ...headers,
    },
    ...config,
  });
};

// export const FILE_URL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;

export const onError = (error: any) => {
  if (error?.response) {
    console.log({ error: error?.response });
    if (error?.response?.status === 401) {
      // AuthService.resetAuthValue();
    }
    if (error?.response?.data?.message) {
      SnackbarHandler.errorToast(error?.response?.data?.message);
    }
  } else {
    console.log({ error });
  }
};

export const jsonToFormData = (data: any) => {
  const formData = new FormData();
  for (let key in data) {
    if (data[key] !== null && data[key] !== undefined) {
      if (Array.isArray(data[key])) {
        data[key].forEach((element: any) => {
          formData.append(key, element);
        });
      } else {
        formData.append(key, data[key]);
      }
    }
  }
  return formData;
};
export const jsonToFormDataWithArray = (data: any) => {
  const formData = new FormData();

  for (let key in data) {
    if (data[key] !== null && data[key] !== undefined) {
      if (Array.isArray(data[key])) {
        data[key].forEach((element: any, index: any) => {
          for (let keys in element) {
            formData.append(
              `${key}[${index}][${keys}]`,
              JSON.stringify(element[keys])
            );
          }
        });
      } else {
        formData.append(key, data[key]);
      }
    }
  }
  return formData;
};
export const convertImagesToBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function () {
      resolve(fileReader.result);
    };
    fileReader.onerror = function (error) {
      console.log("Error: ", error);
      reject(error);
    };
  });
};
export const getBase64 = (
  file: File,
  cb: (base64: string | ArrayBuffer | null) => void
) => {
  if (typeof window !== "undefined") {
    let reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }
};

export const fetcherUrl = (config: AxiosRequestConfig) => {
  const { url, method = "GET", data } = config;

  return axios.request({
    url,
    method,
    data,
    ...config,
  });
};

export const filterUrlData = (
  router: NextRouter,
  routeName: string,
  keyName: string,
  value: string
) => {
  const data: any = router.query;
  if (value === "") {
    delete data[keyName];
  } else {
    data[keyName] = value;
  }
  const query = new URLSearchParams(data).toString();
  router.push(`${routeName}?${query}`);
};

//----------------for socket-----------------//

export const getNextPageParam = (lastPage: any) => {
  const { count, limit, page } = lastPage.data.data;
  const totalPages = Math.ceil(count / limit);
  return totalPages > page ? page + 1 : undefined;
};
export const isValidJson = (str: any) => {
  try {
    JSON.parse(str);
    return true;
  } catch (error) {
    return false;
  }
};
export const combineStringIds = (id1: string, id2: string) => {
  return `${id1}${id2}`
    .split("")
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
    .join("");
};
export const convertFirstLetterToUpperCaseWithSpace = (item: any) => {
  let splitItem = item?.split(" ");
  for (let i = 0; i < splitItem?.length; i++) {
    splitItem[i] =
      splitItem[i].charAt(0).toUpperCase() +
      splitItem[i].substring(1).toLowerCase();
  }
  return splitItem?.join(" ");
};
export const inOrderDays = (arr: Array<string>) => {
  const list = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return list.filter((each) => arr.includes(each));
};
