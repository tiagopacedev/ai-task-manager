import { useFetcher, useLoaderData, useNavigate } from 'react-router'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Textarea } from '~/components/ui/textarea'
import type { loader } from '~/routes/task-edit'
import { toast } from 'sonner'
import { useEffect } from 'react'

export function TaskForm() {
  const { task } = useLoaderData<typeof loader>()
  const fetcher = useFetcher()
  const navigate = useNavigate()

  // Helper function to convert array to string
  const arrayToString = (arr: string[]) => arr.join('\n')

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data) {
      if (fetcher.data?.success) {
        toast.success('Task updated successfully')
        navigate(`/tasks`)
      } else {
        toast.error('Failed to update task')
      }
    }
  }, [fetcher.state, fetcher.data])

  return (
    <fetcher.Form method="POST" className="space-y-6 p-6">
      {/* Title */}
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" defaultValue={task.title} />
      </div>
      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          className="h-36"
          id="description"
          name="description"
          defaultValue={task.description}
        />
      </div>

      {/* Estimated Time */}
      <div className="space-y-2">
        <Label htmlFor="estimatedTime">Estimated Time</Label>
        <Input id="estimatedTime" name="estimated_time" defaultValue={task.estimated_time} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Steps */}
        <div className="space-y-2">
          <Label htmlFor="steps">Steps</Label>
          <Textarea
            className="h-36"
            id="steps"
            name="steps"
            rows={6}
            defaultValue={arrayToString(JSON.parse(task.steps ?? ''))}
          />
        </div>

        {/* Suggested Tests */}
        <div className="space-y-2">
          <Label htmlFor="suggestedTests">Suggested Tests</Label>
          <Textarea
            className="h-36"
            id="suggestedTests"
            name="suggested_tests"
            rows={5}
            defaultValue={arrayToString(JSON.parse(task.suggested_tests ?? ''))}
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
            name="acceptance_criteria"
            rows={5}
            defaultValue={arrayToString(JSON.parse(task.acceptance_criteria ?? ''))}
          />
        </div>

        {/* Implementation Suggestion */}
        <div className="space-y-2">
          <Label htmlFor="implementationSuggestion">Implementation Suggestion</Label>
          <Textarea
            className="h-36"
            id="implementationSuggestion"
            name="implementation_suggestion"
            defaultValue={task.implementation_suggestion ?? ''}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <input type="hidden" name="task_id" value={task.id} />
        <Button type="submit" disabled={fetcher.state !== 'idle'}>
          {fetcher.state === 'submitting' ? 'Saving...' : 'Save Task'}
        </Button>
      </div>
    </fetcher.Form>
  )
}
