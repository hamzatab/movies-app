import { setupServer } from "msw/node"
import { moviesService } from "./moviesServer.mock"

export const server = setupServer(
    ...moviesService
)