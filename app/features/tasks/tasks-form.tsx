import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'

export function TaskForm() {
  // Helper function to convert array to string
  const arrayToString = (arr: string[]) => arr.join('\n')

  // Sample data from JSON
  const sampleSteps = [
    'Create a form component using React',
    'Add field validation using a suitable library',
    'Connect backend for user authentication',
    'Persist sessions using SQLite',
    'Test the complete login and logout flow',
  ]

  const sampleTests = [
    "it('should render the login form correctly')",
    "it('should validate input fields')",
    "it('should authenticate valid credentials')",
    "it('should prevent access with invalid credentials')",
  ]

  const sampleCriteria = [
    'Login form displays correctly with required fields',
    'Invalid input is properly flagged',
    'Valid users can log in and maintain a session',
    'Users are redirected after login and logout',
  ]

  return (
    <form className="space-y-6 p-6">
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" defaultValue="Secure Login Form with Authentication" />
      </div>
      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          className="h-36"
          id="description"
          defaultValue="Implement a modern login form with field validation, session-based authentication, and real-time error feedback."
        />
      </div>

      {/* Estimated Time */}
      <div className="space-y-2">
        <Label htmlFor="estimatedTime">Estimated Time</Label>
        <Input id="estimatedTime" defaultValue="2 days" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Steps */}
        <div className="space-y-2">
          <Label htmlFor="steps">Steps</Label>
          <Textarea
            className="h-36"
            id="steps"
            rows={6}
            defaultValue={arrayToString(sampleSteps)}
          />
        </div>

        {/* Suggested Tests */}
        <div className="space-y-2">
          <Label htmlFor="suggestedTests">Suggested Tests</Label>
          <Textarea
            className="h-36"
            id="suggestedTests"
            rows={5}
            defaultValue={arrayToString(sampleTests)}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Acceptance Criteria */}
        <div className="space-y-2">
          <Label htmlFor="acceptanceCriteria">Acceptance Criteria</Label>
          <Textarea
            className="h-36"
            id="acceptanceCriteria"
            rows={5}
            defaultValue={arrayToString(sampleCriteria)}
          />
        </div>

        {/* Implementation Suggestion */}
        <div className="space-y-2">
          <Label htmlFor="implementationSuggestion">Implementation Suggestion</Label>
          <Textarea
            className="h-36"
            id="implementationSuggestion"
            defaultValue="Use React Hook Form for input validation, Prisma ORM to manage user data, and set up protected routes using React Router 7."
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Save Task</Button>
      </div>
    </form>
  )
}
