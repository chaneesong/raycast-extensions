import { LaunchProps, closeMainWindow, popToRoot } from "@raycast/api";
import { exec } from "child_process";

function openInDefaultBrowser(url: string) {
  exec(`open ${url}`);
}

export default async function Command(props: LaunchProps<{ arguments: Arguments.SaerchBrowser }>) {
  const { url } = props.arguments;
  const startsWithHttps = /^https:\/\//.test(url);
  if (startsWithHttps) {
    openInDefaultBrowser(url);
  } else {
    openInDefaultBrowser(`https://${url}`);
  }
  await popToRoot({ clearSearchBar: true });
  await closeMainWindow({ clearRootSearch: true });

  return null;
}
