import { redirect } from 'next/navigation'

/**
 * Root page — redirects to the listing demo page.
 * In a full implementation this would be the search/home page.
 */
export default function RootPage() {
  redirect('/listing')
}
