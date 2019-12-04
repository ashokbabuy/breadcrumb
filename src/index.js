import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Tooltip,
  TooltipDefinition,
  OverflowMenu,
  OverflowMenuItem
} from "carbon-components-react";
import {
  StatefulTable,
  Breadcrumb,
  BreadcrumbItem,
  Table
} from "carbon-addons-iot-react";
import { isTemplateElement } from "@babel/types";
import TextTrimUtil from "../src/textTrimUtil";
import "../cssCust.css";

// const props = {
//   menu: () => ({
//     direction: select("Menu direction (direction)", directions, "bottom"),
//     ariaLabel: text("ARIA label (ariaLabel)", "Menu"),
//     iconDescription: text("Icon description (iconDescription)", ""),
//     flipped: boolean("Flipped (flipped)", false),
//     onClick: action("onClick"),
//     onFocus: action("onFocus"),
//     onKeyDown: action("onKeyDown"),
//     onClose: action("onClose"),
//     onOpen: action("onOpen")
//   }),
//   menuItem: () => ({
//     className: "some-class",
//     disabled: boolean("Disabled (disabled)", false),
//     requireTitle: boolean(
//       "Use hover over text for menu item (requireTitle)",
//       false
//     ),
//     onClick: action("onClick")
//   })
// };

var data = [
  {
    values: {
      "Hierarchy level": "Continent",
      Items: 3,
      Organizations: [
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 "
      ],
      "Cost Codes": [
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800"
      ],
      Dashboard: "Open dashboard",
      Status: "moneyLoss"
    },
    id: "row-0"
  },
  {
    values: {
      "Hierarchy level": "Country",
      Items: 45,
      Organizations: [
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 "
      ],
      "Cost Codes": [
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800"
      ],
      Dashboard: "Open dashboard",
      Status: "moneyLoss"
    },
    id: "row-1"
  },
  {
    values: {
      "Hierarchy level": "State",
      Items: 230,
      Organizations: [
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 "
      ],
      "Cost Codes": [
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800"
      ],
      Dashboard: "Open dashboard",
      Status: "moneyLoss"
    },
    id: "row-2"
  },
  {
    values: {
      "Hierarchy level": "City",
      Items: 745,
      Organizations: [
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 "
      ],
      "Cost Codes": [
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800"
      ],
      Dashboard: "Open dashboard",
      Status: "moneyLoss"
    },
    id: "row-3"
  },
  {
    values: {
      "Hierarchy level": "Campus",
      Items: 810,
      Organizations: [
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 "
      ],
      "Cost Codes": [
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800"
      ],
      Dashboard: "Open dashboard",
      Status: "moneyLoss"
    },
    id: "row-4"
  },
  {
    values: {
      "Hierarchy level": "Building",
      Items: 1940,
      Organizations: [
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 ",
        "Watson IoT",
        "Research",
        "Sales",
        "Cl0 "
      ],
      "Cost Codes": [
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800",
        "Y69000",
        "B42100",
        "X67800"
      ],
      Dashboard: "Open dashboard",
      Status: "moneyLoss"
    },
    id: "row-5"
  }
];
const organizations = [
  "Watson IoT",
  "Research",
  "Sales",
  "Cl0 ",
  "Watson IoT",
  "Research",
  "Sales",
  "Cl0 ",
  "Watson IoT",
  "Research",
  "Sales",
  "Cl0 ",
  "Watson IoT",
  "Research",
  "Sales",
  "Cl0 ",
  "Watson IoT",
  "Research",
  "Sales",
  "Cl0 "
];
class App extends React.Component {
  getBreadcrumbs(dataArray) {
    var data = dataArray.map(function(val, index) {
      return (
        <Breadcrumb className="someclass" onClick={function noRefCheck() {}}>
          <BreadcrumbItem>
            <a href="/#">Breadcrumb 1</a>
          </BreadcrumbItem>
          {/* <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem> */}
          <div className="container">
            <OverflowMenu
              direction="bottom"
              onOpen={() => {
                console.log("overflowmenuopen");
              }}
              onClick={() => {
                console.log("overflowmenuclick");
              }}
              renderIcon={() => <div style={{ padding: "0 1rem" }}>...</div>}
            >
              <OverflowMenuItem
                onClick={() => {
                  console.log("item clicked");
                }}
                itemText="some"
              />
              <OverflowMenuItem itemText="another" />
            </OverflowMenu>
            <div className="bx-breadcrumb-after-cust">/</div>
          </div>
          <BreadcrumbItem href="#" isCurrentPage>
            Breadcrumb 3
          </BreadcrumbItem>
        </Breadcrumb>
      );
    });
    return data;
  }

  render() {
    return (
      <div>
        {this.getBreadcrumbs(["ashok"])}
        <OverflowMenu
          direction="bottom"
          onOpen={() => {
            console.log("overflowmenuclick");
          }}
          onClick={() => {
            console.log("overflowmenuclick");
          }}
          //renderIcon={() => <div style={{ padding: "0 1rem" }}>...</div>}
        >
          <OverflowMenuItem
            onClick={() => {
              console.log("item clicked");
            }}
            itemText="some"
          />
          <OverflowMenuItem itemText="another" />
        </OverflowMenu>
        <TextTrimUtil items={organizations} />
        <Table
          columns={[
            {
              id: "Hierarchy level",
              name: "Hierarchy level"
            },
            {
              id: "Items",
              name: "Items"
            },
            {
              id: "Organizations",
              name: "Organizations"
            },
            {
              id: "Cost Codes",
              name: "Cost Codes",
              width: "3rem"
            },
            {
              id: "Dashboard",
              name: "Dashboard"
            }
          ]}
          data={[
            {
              values: {
                "Hierarchy level": "Continent",
                Items: 3,
                Organizations: (
                  <TextTrimUtil
                    items={[
                      "Watson IoT",
                      "Research",
                      "Sales",
                      "Cl0 ",
                      "Watson IoT",
                      "Research",
                      "Sales",
                      "Cl0 ",
                      "Watson IoT",
                      "Research",
                      "Sales",
                      "Cl0 ",
                      "Watson IoT",
                      "Research",
                      "Sales",
                      "Cl0 ",
                      "Watson IoT",
                      "Research",
                      "Sales",
                      "Cl0 "
                    ]}
                  />
                ),
                "Cost Codes": (
                  <TextTrimUtil
                    orgs={[
                      "Y69000",
                      "B42100",
                      "X67800",
                      "Y69000",
                      "B42100",
                      "X67800",
                      "Y69000",
                      "B42100",
                      "X67800",
                      "Y69000",
                      "B42100",
                      "X67800",
                      "Y69000",
                      "B42100",
                      "X67800",
                      "Y69000",
                      "B42100",
                      "X67800",
                      "Y69000",
                      "B42100",
                      "X67800",
                      "Y69000",
                      "B42100",
                      "X67800"
                    ]}
                  />
                )
              },
              id: "row-0"
            }
          ]}
          options={{
            hasPagination: false,
            hasRowSelection: "single",
            hasSearch: false
          }}
          style={
            {
              // maxWidth: "1080px"
            }
          }
        />
        <Button>Hello world</Button>
        <div
          style={{
            marginTop: "2rem"
          }}
        >
          <a href="" target="_blank">
            ashok
          </a>
          <Tooltip
            clickToOpen="false"
            direction="bottom"
            tabIndex={0}
            triggerText="Tooltip label"
          >
            <p>
              This is some tooltip text. This box shows the maximum amount of
              text that should appear inside. If more room is needed please use
              a modal instead.
            </p>
            <div className="bx--tooltip__footer">
              <a className="bx--link" href="/">
                Learn More
              </a>
              <Button
                disabled={false}
                kind="primary"
                size="small"
                tabIndex={0}
                type="button"
              >
                Create
              </Button>
            </div>
          </Tooltip>

          <div
            style={{
              marginTop: "2rem"
            }}
          >
            <TooltipDefinition
              align="start"
              direction="bottom"
              tooltipText="Brief description of the dotted, underlined word above."
              triggerClassName=""
            >
              Definition Tooltip
            </TooltipDefinition>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
