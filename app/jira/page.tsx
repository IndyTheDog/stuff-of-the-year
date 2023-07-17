const Home = async () => {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Basic ${process.env.JIRA_TOKEN}`)
  const sprintPrefix = 'DW Sprint'

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
  }

  const getAllSprints = async () => {
    const response = await fetch(
      'https://rebuiltfw.atlassian.net/rest/agile/1.0/board/60/sprint',
      requestOptions
    )
    const jsonResponse = await response.json()
    const dwSprints: { id: number; name: string }[] = []
    jsonResponse.values.forEach((element) => {
      const sprintName: string = element.name || ''
      if (sprintName.startsWith(sprintPrefix))
        dwSprints.push({
          id: +element.id,
          name: element.name,
        })
    })
    return dwSprints
  }

  const getJiraData = async (sprint: string) => {
    const response = await fetch(
      `https://rebuiltfw.atlassian.net/rest/api/3/search?jql=project%3DDW%20and%20sprint%20${sprint}%20and%20labels%20IN%20(dot%2Chipflat)`,
      requestOptions
    )
    const jsonResponse = await response.json()
    return jsonResponse
  }

  const colorMe = (value: string) => {
    let color = ''
    if (value === 'Done') color = 'text-green-600'
    if (value === 'In Progress') color = 'text-orange-300'
    return <span className={color}>{value}</span>
  }

  const findPriority = (priority: string) => {
    const priorityContent: string[] = []
    switch (priority) {
      case 'Highest':
        priorityContent.push('text-green-600')
        priorityContent.push('P1')
        break
      case 'High':
        priorityContent.push('text-blue-600')
        priorityContent.push('P2')
        break
      case 'Medium':
        priorityContent.push('')
        priorityContent.push('P3')
        break
      default:
        priorityContent.push('')
        break
    }
    return priorityContent
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buildTable = (issues: any[]) => {
    const sprintData: { id: number; name: string; component: JSX.Element[] } = {
      id: 0,
      name: '',
      component: [],
    }
    if (issues) {
      issues.forEach((element) => {
        if (sprintData.id === 0) {
          let latestSprint = 0
          let sprintName = ''
          element.fields.customfield_10121?.forEach((sprint) => {
            if (sprint.id > latestSprint) {
              latestSprint = sprint.id
              sprintName = sprint.name
            }
          })
          sprintData.id = latestSprint
          sprintData.name = sprintName
        }
        const resolutionDate = new Date(element.fields.resolutiondate)
        const day = resolutionDate.getDate()
        const month = resolutionDate.getMonth()
        const year = resolutionDate.getFullYear()
        const priority = findPriority(element.fields.priority?.name || '')
        const el = (
          <tr className="border-secondary-color border-2">
            <td className={`${priority[0]} px-2 py-2 border-r-2`}>
              {priority[1]}
            </td>
            <td className="px-2 py-2 border-r-2">{element.fields.summary}</td>
            <td className="px-2 py-2  border-r-2">
              {element.fields.resolution
                ? colorMe(element.fields.resolution.name)
                : colorMe(element.fields.status?.name)}
            </td>
            <td className="px-2 py-2  border-r-2">
              {year != 1970 ? day + '-' + month + '-' + year : ''}
            </td>
            <td className="px-2 py-2 ">
              {element.fields.assignee?.displayName}
            </td>
          </tr>
        )
        sprintData.component.push(el)
      })
    }

    return sprintData
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const buildSprint = (title: string, issues: any[]) => {
    const currentSprintInfo = buildTable(issues)
    const component = (
      <>
        <h2 className="text-2xl">
          {title} - {currentSprintInfo.name}
        </h2>
        <table className="mb-5">
          <thead>
            <tr>
              <th className="w-1/12">Priority</th>
              <th className="w-6/12">Story</th>
              <th className="w-1/12">Status</th>
              <th className="w-1/12">Completed</th>
              <th className="w-3/12">Main Assignee</th>
            </tr>
          </thead>
          <tbody>{currentSprintInfo.component}</tbody>
        </table>
      </>
    )
    return {
      id: currentSprintInfo.id,
      component,
    }
  }

  const findPreviousSprint = async (currentSprintId: number) => {
    const dwSprints = await getAllSprints()
    let latestSprintId = 0
    dwSprints.forEach((sprint) => {
      if (sprint.id < currentSprintId && sprint.id > latestSprintId) {
        latestSprintId = sprint.id
      }
    })
    return latestSprintId
  }

  const currentSprintData = await getJiraData('in%20openSprints()')
  const currentSprint = buildSprint('Current Sprint', currentSprintData.issues)
  const currentSprintId = currentSprint.id
  const lastSprintId = await findPreviousSprint(currentSprintId)
  const lastSprintData = await getJiraData(`=%20${lastSprintId}`)
  const lastSprint = buildSprint('Last Sprint', lastSprintData.issues)

  return (
    <main className="text-slate-50 w-full px-10">
      {lastSprint.component}
      {currentSprint.component}
    </main>
  )
}

export default Home
