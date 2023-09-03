import { LaunchProps, closeMainWindow, open, popToRoot } from "@raycast/api";

export default async function Command(props: LaunchProps<{ arguments: Arguments.SearchBrowser }>) {
  const { url } = props.arguments;
  const startsWithHttps = /^https:\/\//.test(url);
  const fullUrl = startsWithHttps ? url : `https://${url}`;
  await open(fullUrl);
  await popToRoot({ clearSearchBar: true });
  await closeMainWindow({ clearRootSearch: true });

  return null;
}
