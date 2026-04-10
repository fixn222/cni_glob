import {
  Bell,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileText,
  Globe2,
  Mail,
  MessageCircleMore,
  PlaneTakeoff,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { Link } from "react-router-dom"

import { Avatar, AvatarFallback } from "../components/ui/avatar"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { Separator } from "../components/ui/separator"
import { useSession } from "../hooks/useSession"
import { ROUTES } from "../lib/routes"

const applicationMetrics = [
  {
    label: "Active destination",
    value: "Canada",
    detail: "Tourist visa pathway ready for review",
    icon: Globe2,
  },
  {
    label: "Document readiness",
    value: "4 of 6 done",
    detail: "Passport, profile, and contact details already covered",
    icon: FileCheck2,
  },
  {
    label: "Client updates",
    value: "WhatsApp live",
    detail: "Status changes can be mirrored to client messaging",
    icon: MessageCircleMore,
  },
]

const journeySteps = [
  {
    title: "Account secured",
    detail: "Email verified and session ready for private application work.",
    status: "Completed",
  },
  {
    title: "Destination planning",
    detail: "Select the country and visa type before completing the full form.",
    status: "Current",
  },
  {
    title: "Document preparation",
    detail: "Upload passport copy, financial proof, itinerary, and supporting files.",
    status: "Pending",
  },
  {
    title: "AI review and submission",
    detail: "CNI reviews the package and prepares the final submission steps.",
    status: "Pending",
  },
]

const inboxItems = [
  {
    sender: "CNI Global",
    subject: "Your workspace is ready",
    preview:
      "Start by choosing a destination and completing the applicant profile to unlock document guidance.",
    time: "Now",
    unread: true,
  },
  {
    sender: "Document Desk",
    subject: "Prepare your passport and travel plan",
    preview:
      "Keep your passport scan, travel dates, and financial records ready for a faster application review.",
    time: "Today",
    unread: true,
  },
  {
    sender: "Visa Automation",
    subject: "Email processing available",
    preview:
      "Messages from the client or embassy can later be organized into the dashboard workflow automatically.",
    time: "This week",
    unread: false,
  },
]

const checklistItems = [
  "Choose your destination country",
  "Complete your personal and passport details",
  "Upload passport copy and photo",
  "Add financial proof and travel plan",
  "Review before submission with CNI support",
]

const supportChannels = [
  {
    title: "Document prep",
    detail: "Structured help for visa files, supporting letters, and upload readiness.",
    icon: FileText,
  },
  {
    title: "Email automation",
    detail: "Incoming messages can be converted into structured application updates.",
    icon: Mail,
  },
  {
    title: "Real-time updates",
    detail: "Use dashboard and WhatsApp notifications to stay aligned during processing.",
    icon: Bell,
  },
]

const ClientDashboard = () => {
  const { user, signOut } = useSession()

  const displayName = user?.name?.trim() || "Client"
  const initials =
    user?.name
      ?.split(" ")
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "CN"

  return (
    <section className="min-h-screen bg-[linear-gradient(180deg,rgba(41,168,154,0.08),transparent_24%),linear-gradient(180deg,#ffffff,rgba(248,250,252,0.92))] px-4 pb-16 pt-28 sm:px-6 lg:px-8 dark:bg-[linear-gradient(180deg,rgba(41,168,154,0.12),transparent_24%),linear-gradient(180deg,#0f172a,rgba(15,23,42,0.96))]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6">
        <Card className="border-border/80 bg-background/90 shadow-md backdrop-blur">
          <CardContent className="flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <Avatar className="size-14 border-primary/20 bg-primary/10">
                <AvatarFallback className="bg-transparent text-base font-semibold text-foreground">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-semibold sm:text-3xl">
                    Welcome back, {displayName}
                  </h1>
                  <Badge variant="secondary">Visa workspace</Badge>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                  Manage destination planning, document preparation, and
                  application progress from one place. This dashboard is tuned
                  for the CNI visa journey instead of a generic client portal.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Button asChild variant="outline" className="h-11 rounded-xl px-4">
                <Link to={ROUTES.APPLICATION}>
                  <PlaneTakeoff />
                  Start application
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-11 rounded-xl px-4"
                onClick={() => void signOut()}
              >
                <ShieldCheck />
                Sign out
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          {applicationMetrics.map((item) => {
            const Icon = item.icon

            return (
              <Card key={item.label} className="border-border/80 bg-background/90">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <CardDescription>{item.label}</CardDescription>
                      <CardTitle className="mt-2 text-xl">{item.value}</CardTitle>
                    </div>
                    <div className="rounded-xl bg-primary/10 p-3 text-primary">
                      <Icon className="size-5" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_340px]">
          <div className="space-y-6">
            <Card className="border-border/80 bg-background/90">
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <CardTitle>Application journey</CardTitle>
                    <CardDescription>
                      The next steps match this product’s real workflow:
                      destination, documents, review, and submission.
                    </CardDescription>
                  </div>
                  <Badge variant="success">Guided flow</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-2xl border border-border/70 bg-muted/40 p-4">
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium">Workspace readiness</span>
                    <span className="text-muted-foreground">65%</span>
                  </div>
                  <Progress value={65} className="mt-3" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 p-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Globe2 className="size-4 text-primary" />
                      Recommended next move
                    </div>
                    <p className="mt-3 text-base font-semibold">
                      Choose destination and visa type
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Begin the guided application so document requirements can
                      be tailored to your route.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/70 p-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Clock3 className="size-4 text-primary" />
                      AI assistance
                    </div>
                    <p className="mt-3 text-base font-semibold">
                      Document validation and updates
                    </p>
                    <p className="text-sm text-muted-foreground">
                      CNI uses automation to reduce missing files and keep your
                      application clearer during review.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {journeySteps.map((item, index) => (
                    <div key={item.title}>
                      <div className="flex items-start gap-4">
                        <div className="mt-1 rounded-full bg-primary/10 p-2 text-primary">
                          <CheckCircle2 className="size-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-medium">{item.title}</p>
                            <Badge
                              variant={
                                item.status === "Completed"
                                  ? "secondary"
                                  : item.status === "Current"
                                    ? "default"
                                    : "outline"
                              }
                            >
                              {item.status}
                            </Badge>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                      {index < journeySteps.length - 1 ? (
                        <Separator className="my-4" />
                      ) : null}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/80 bg-background/90">
              <CardHeader>
                <CardTitle>Updates and communication</CardTitle>
                <CardDescription>
                  This product is built around tracked updates, processed emails,
                  and clear client communication.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {inboxItems.map((email, index) => (
                  <div key={email.subject}>
                    <div className="rounded-2xl border border-border/70 p-4 transition-colors hover:bg-muted/30">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-medium">{email.sender}</p>
                            {email.unread ? <Badge>Unread</Badge> : <Badge variant="outline">Read</Badge>}
                          </div>
                          <p className="mt-2 text-sm font-medium">{email.subject}</p>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {email.preview}
                          </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground">
                          <span>{email.time}</span>
                          <ChevronRight className="size-4" />
                        </div>
                      </div>
                    </div>
                    {index < inboxItems.length - 1 ? <Separator className="my-3" /> : null}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-border/80 bg-background/90">
              <CardHeader>
                <CardTitle>Applicant profile</CardTitle>
                <CardDescription>
                  Your account details are the base for the rest of the visa workflow.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-2xl border border-border/70 p-4">
                  <p className="text-sm text-muted-foreground">Full name</p>
                  <p className="mt-1 font-medium">{displayName}</p>
                </div>
                <div className="rounded-2xl border border-border/70 p-4">
                  <p className="text-sm text-muted-foreground">Email address</p>
                  <p className="mt-1 font-medium">{user?.email}</p>
                </div>
                <div className="rounded-2xl border border-border/70 p-4">
                  <p className="text-sm text-muted-foreground">Account status</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Sparkles className="size-4 text-primary" />
                    <p className="font-medium">Verified and ready for application setup</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/80 bg-background/90">
              <CardHeader>
                <CardTitle>Preparation checklist</CardTitle>
                <CardDescription>
                  Keep the high-friction visa tasks visible and simple.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {checklistItems.map((item, index) => (
                  <div key={item}>
                    <div className="flex items-start gap-3 rounded-2xl border border-border/70 p-4">
                      <ShieldCheck className="mt-0.5 size-4 text-primary" />
                      <p className="text-sm leading-6">{item}</p>
                    </div>
                    {index < checklistItems.length - 1 ? <Separator className="my-3" /> : null}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/80 bg-background/90">
              <CardHeader>
                <CardTitle>Support stack</CardTitle>
                <CardDescription>
                  These features define the product beyond a standard dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {supportChannels.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <div key={item.title}>
                      <div className="rounded-2xl border border-border/70 p-4">
                        <div className="flex items-center gap-2">
                          <Icon className="size-4 text-primary" />
                          <p className="font-medium">{item.title}</p>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                      {index < supportChannels.length - 1 ? <Separator className="my-3" /> : null}
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientDashboard
