import { TABS, tabComponents } from "@constants/admin";
import {
  Tabs, TabsList,
  TabsTrigger, TabsContent
} from "@ui/tabs";


export default function SectionTabs () {
  const capitalize = str => str.charAt(0)
    .toUpperCase() + str.slice(1);

  
  return (
    <Tabs defaultValue="projects" id="tabs">
      <TabsList
        className="tabs-list"
      >
        {
          TABS.map(
            ({ id, name, icon: Icon }) => (
              <TabsTrigger
                key={ id }
                value={ name }
                className="tabs-trigger"
              >
                <span>
                  <Icon />
                </span>
                { capitalize(name) }
              </TabsTrigger>
            )
          )
        }
      </TabsList>

      {
        TABS.map(
          ({ id, name }) => {
            const Component = tabComponents[name];

            return (
              <TabsContent
                key={ id }
                value={ name }
              >
                <Component />
              </TabsContent>
            )
          }
        )
      }
    </Tabs>
  )
}