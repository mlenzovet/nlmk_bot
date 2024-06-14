import {sitemap, SitePage, SitePageGroup, RunAction} from '@/sitemap/sitemap.ts';
const sameUrl = (url) => (item) => item.href == url || item.to?.name === url;
const matchingSitePageGroup = (su) => (group: SitePageGroup) => !!group.items.find(su);
export function getConnectedRoutes(url: string): SitePage[] {
    const su = sameUrl(url);
    const matchingGroup = sitemap.find(matchingSitePageGroup(su))
    if (matchingGroup) {
        return matchingGroup.items.filter(item=>!su(item))
    }
    return [];
}

export function findNextStepRoute(url): SitePage | null{
    const su = sameUrl(url);
    const matchingIndex = sitemap.findIndex(matchingSitePageGroup(su));
    if (matchingIndex != -1 && matchingIndex < sitemap.length - 1){
        return sitemap[matchingIndex + 1].items?.[0];
    }
    return null;
}

export function findRunAction(url): RunAction {
    const su = sameUrl(url);
    const matchingGroup = sitemap.find(matchingSitePageGroup(su));
    return matchingGroup?.runAction;

}