import { createSelector } from "reselect";

const directorySections = state => state.directory;

export const selectDirectorySections = createSelector(
    [directorySections],
    directory => directory.sections
);
