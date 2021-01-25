const numericComparator = (a, b) => a - b;
const stringComparator = (a, b) => a - b;

const DEFAULT_COLUMN_PROPERTY = {
  resizable: true,
  filterPattern: { newRowsAction: "keep", showTooltips: true },
  hide: false,
  suppressSizeToFit: false,
  sortable: true,
  tooltipValueGetter: (a) => a.value,
  filter: true,
  autoHeight: true,
};

const TEXT_COLUMN = {
  ...DEFAULT_COLUMN_PROPERTY,
  filter: true,
  comparator: stringComparator,
  filter: "agSetColumnFilter",
  filterParams: {
    applyButton: true,
    showTooltips: true,
    newRowsAction: "keep",
    clearButton: true,
  },
};

const NUMERIC_COLUMN = {
  ...DEFAULT_COLUMN_PROPERTY,
  comparator: numericComparator,
  filter: true,
  filter: "agNumberColumnFilter",
  filterParams: {
    applyButton: false,
    showTooltips: true,
    newRowsAction: "keep",
    clearButton: false,
  },
};

const DATE_COLUMN = {
  ...DEFAULT_COLUMN_PROPERTY,
  filter: true,
  filter: "agDateColumnFilter",
  filterParams: {
    applyButton: false,
    showTooltips: true,
    newRowsAction: "keep",
    clearButton: false,
    suppressAndOrCondition: true,
  },
};

// "id": 1,
// "email": "george.bluth@reqres.in",
// "first_name": "George",
// "last_name": "Bluth",
// "avatar": "https://reqres.in/img/faces/1-image.jpg"

export const colConfig = [
  {
    headerName: "User ID",
    field: "id",
    ...TEXT_COLUMN,
  },
  {
    ...NUMERIC_COLUMN,
    headerName: "EMAIL",
    field: "email",
  },
  {
    ...DATE_COLUMN,
    headerName: "First Name",
    field: "first_name",
  },
  {
    ...TEXT_COLUMN,
    headerName: "Last Name",
    field: "last_name",
  },
  {
    ...TEXT_COLUMN,
    headerName: "Photo",
    field: "avatar",
    width: 100,
    cellRenderer: ({ value }) => `<img style="width: 100px;" src=${value} />`,
  },
];
