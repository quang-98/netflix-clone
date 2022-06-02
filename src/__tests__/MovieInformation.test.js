import { render, screen, cleanup } from "@testing-library/react";
import MovieInformation from "../components/MovieInformation";
import axiosMock from "axios";

expect(axiosMock.get).toHaveBeenCalledTimes(1);
