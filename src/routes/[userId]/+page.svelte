<script lang="ts">
	export let data: any;
	const { success } = data;
	let payload = { sucess: false };
	if (data && data.tasks.success) {
		payload = { ...data };
	}
	let userId = payload.userId;
	let months = payload.months;
  let issueType = payload.tasks.issueTypes
  $: filteredUnclasificatedTasks = payload.tasks.unclasificated.filter(task => issueType.includes(task.issueType))
  console.log(payload);
</script>

<header class="w-full bg-indigo-500 py-3 px-5 text-white flex items-center justify-between">
	<span class="text-xl font-bold">My story points</span>
	<div class="tooltips">
		<button class="btn-primary flex items-center">
			<!-- <span class="tooltiptext" id="myTooltip">copiar link al clipboard</span> -->
			<img class="mr-1 inline-block" alt="icon" src="/icons/file-copy-line.svg" width="20px" />
			<span>Copiar link</span>
		</button>
	</div>
</header>
<div class="w-5/6 mx-auto mt-10">
	<div class="w-2/4 m-auto"><img src="/logo-full.png" alt="logo" /></div>
	<p class="mt-5 text-xl text-center mb-20 font-semibold text-gray-600">
		Visualiza tus story points de una manera fácil para saber tu rendimiento
	</p>
</div>
<div class="w-5/6 mx-auto mt-2">
	<form action="?/tasks" method="POST">
		<div class="w-full">
			<span>Usuario a buscar</span>
			<input
				class="px-3 py-2 mb-4 w-full border border-gray-300 rounded-md focus:border-rose-500"
				name="userId"
				bind:value={userId}
				placeholder="Jira userId a buscar"
			/>
		</div>
		<div class="block self-center mb-4">
			<label class="mr-1">1M</label>
			<input type="radio" name="months" value="1" bind:group={months} required="required" />
			<label class="ml-2 mr-1">2M</label>
			<input type="radio" name="months" value="2" bind:group={months} required="required" />
			<label class="ml-2 mr-1">3M</label>
			<input type="radio" name="months" value="3" bind:group={months} required="required" />
		</div>
		<button class="btn-primary flex items-center" type="submit">
			<img class="mr-1 inline-block" src="/icons/search-line.svg" alt="icon" width="20px" />
			<span>Buscar</span>
		</button>
	</form>
	{#if payload.tasks.success}
    <div>
    </div>
		<div class="flex rounded-md justify-between px-5 py-5 bg-indigo-50 my-10">
			<div>
				<p class="mt-2">
          <img class="rounded-full" src={payload.user.avatarUrls["32x32"]} alt="avatar img">
				</p>
				<p class="mt-2">
					<span class="font-medium">Usuario: </span><span class="text-indigo-500"
						>{payload.user.displayName}</span
					>
				</p>
				<p>
					<span class="font-medium">Semana actual: </span><span class="text-indigo-500"
						>{payload.tasks.actual}</span
					>
				</p>
				<p>
					<span class="font-medium">Tareas sin clasificar: </span><span class="text-indigo-500"
						>{payload.tasks.unclasificated.length}</span
					>
				</p>
			</div>
			<div class="self-center">
				<button disabled class="btn-primary flex items-center" onclick="location.reload()">
					<img class="mr-1 inline-block" src="/icons/loop-left-line.svg" width="20px" /><span
						>Actualizar(deshabilitado)</span
					></button
				>
			</div>
		</div>
    <div>
      <p>Tipos de tareas</p>
			{#each payload.tasks.issueTypes as type}
        <label class="mr-2 "><input type="checkbox" bind:group={issueType} value={type}/> {type}</label> 
      {/each}
    </div>
		<div class="flex justify-start mt-2 flex-wrap">
			{#each filteredUnclasificatedTasks as task}
				<div class="inline-block tag-danger tooltip">
					<span class="tooltiptext">{task.summary}</span>
					<a href="https://koibanx.atlassian.net/browse/{task.key}" target="_blank_">
						<p>
							<span class="font-semibold">{task.key}</span>
						</p>
						<p>
							<span>{task.issueType}</span>
							<span class={task.endDate ? '' : 'text-red-500'}>endDate</span>
							<span class={task.endDate ? '' : 'text-red-500'}>storyPoints</span>
						</p>
					</a>
				</div>
			{/each}
		</div>
		<div class="mx-auto w-full flex justify-center my-10">
			<table class="w-full">
				<thead>
					<tr>
						<th>Semana</th>
						<th>Fecha Inicio</th>
						<th>Fecha Final</th>
						<th>Story points</th>
						<th>Issues</th>
					</tr>
				</thead>
				<tbody>
					{#each Object.entries(payload.tasks.cal) as [key, week]}
						<tr class={week.week === payload.tasks.actual ? '!bg-indigo-100' : ''}>
							<td class="text-center">{key}</td>
							<td class="text-center">{week.start}</td>
							<td class="text-center">{week.end}</td>
							<td class="text-center">{week.total}</td>
							<td>
								{#each week.issues as issue}
									<div class="inline-block tooltip">
										<span class="tooltiptext">{issue.summary} </span>
										<a
											class={issue.resolution === 'Done' || issue.resolution === 'Finalizado'
												? 'tooltip tag-success'
												: 'tooltip tag-warning'}
										>
											<p>
												<span class="font-semibold">{issue.key}</span>
												<span>{issue.storyPoint}</span>
											</p>
										</a>
									</div>
								{/each}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>
